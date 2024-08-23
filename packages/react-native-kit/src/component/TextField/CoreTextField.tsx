import React, { useState, useEffect } from 'react';
import type { TextInputProps, StyleProp, TextStyle } from 'react-native';
import { TextInput } from 'react-native';

import type { NumericFormatType } from './textFieldNumericFormatUtils';
import { TextFieldNumericFormatUtil } from './textFieldNumericFormatUtils';

import { FontWeight, is, palette, spacing } from '@teamturing/react-native-kit';

type Props = {
  style?: StyleProp<TextStyle>;
  disabled?: boolean;
  readonly?: boolean;
  /**
   * Spearate string displayed with real interal string by formatting allowed only number or asterisk(*)
   *
   * The keyboardType, maxLength props are set automatically. The manual values are ignored.
   *
   * This causes additional build phase. This is the limitation of RN RIP.
   */
  numericFormatType?: NumericFormatType;
  onChangeText?: (formattedValue: string, internalValue: string) => void;
} & Pick<
  TextInputProps,
  | 'textContentType'
  | 'maxLength'
  | 'multiline'
  | 'onFocus'
  | 'onBlur'
  | 'placeholder'
  | 'placeholderTextColor'
  | 'value'
  | 'keyboardType'
  | 'onSubmitEditing'
  | 'returnKeyType'
  | 'autoFocus'
  | 'secureTextEntry'
  | 'enablesReturnKeyAutomatically'
  | 'scrollEnabled'
  | 'testID'
>;

const CoreTextField = (
  {
    disabled,
    readonly,
    style,
    value,
    onChangeText,
    numericFormatType,
    keyboardType,
    maxLength,
    textContentType,
    ...props
  }: Props,
  ref: React.Ref<TextInput>,
) => {
  const isFormattingEnabled = is.notEmptyString(numericFormatType);

  const [formattedValue, setFormattedValue] = useState<string>(value || '');

  const editable = !(disabled || readonly);

  useEffect(() => {
    if (isFormattingEnabled) {
      const formatted = TextFieldNumericFormatUtil.formatWithType(numericFormatType, value || '', '');
      setFormattedValue(formatted);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, isFormattingEnabled, numericFormatType]);

  return (
    <TextInput
      allowFontScaling={false}
      ref={ref}
      style={[
        {
          fontWeight: FontWeight.Medium,
          fontSize: 16,
          color: disabled ? palette.gray400 : palette.gray900,
          lineHeight: props.multiline && formattedValue?.includes('\n') ? 16 * 1.5 : undefined,
          includeFontPadding: false,
        },
        style,
      ]}
      placeholderTextColor={palette.gray400}
      autoCapitalize={'none'}
      autoCorrect={false}
      editable={editable}
      focusable={editable}
      hitSlop={{ left: spacing[5], top: spacing[3], bottom: spacing[3] }}
      returnKeyType={'done'}
      value={isFormattingEnabled ? formattedValue : value}
      onChangeText={(value) => {
        if (!isFormattingEnabled) {
          onChangeText?.(value, value);
        } else {
          const formatted = TextFieldNumericFormatUtil.formatWithType(numericFormatType, value, formattedValue);
          setFormattedValue(formatted);
          onChangeText?.(formatted, TextFieldNumericFormatUtil.parseOnlyEscapeCharacters(formatted));
        }
      }}
      {...props}
      keyboardType={isFormattingEnabled ? 'number-pad' : keyboardType}
      maxLength={isFormattingEnabled ? numericFormatType!.length : maxLength}
      // Only iOS prop for auto complete id/password, sms code
      textContentType={is.iOS() ? textContentType : undefined}
    />
  );
};

export default React.forwardRef(CoreTextField);
export type { Props as CoreTextFieldProps };
