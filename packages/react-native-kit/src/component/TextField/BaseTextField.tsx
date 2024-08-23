import {
  is,
  palette,
  spacing,
  Txt,
  Grid,
  Shake,
  type ImperativeAnimationRef,
  Touch,
} from '@teamturing/react-native-kit';
import React, { useEffect, useRef } from 'react';
import { type TextInput, type StyleProp, type ViewStyle, type ColorValue, type TextStyle, View } from 'react-native';

import { IconBtn } from '../Btn';
import { type IconName, Icon } from '../Icon';

import type { CoreTextFieldProps } from './CoreTextField';
import CoreTextField from './CoreTextField';

type Props = {
  label?: string;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  trailingIconFill?: ColorValue;
  trailingElements?: React.ReactElement[];
  disabled?: boolean;
  readonly?: boolean;
  helpText?: string;
  successText?: string;
  errorText?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textFieldStyle?: TextStyle;
} & Omit<CoreTextFieldProps, 'style'>;

const BaseTextField = (
  {
    label,
    leadingIcon,
    trailingIcon,
    trailingIconFill,
    trailingElements = [],
    disabled = false,
    readonly = false,
    helpText,
    errorText,
    successText,
    onPress,
    style,
    textFieldStyle,
    ...props
  }: Props,
  ref: React.Ref<TextInput>,
) => {
  const isError = is.notEmptyString(errorText);
  const isSuccess = is.notEmptyString(successText);

  const shake = useRef<ImperativeAnimationRef>(null);
  useEffect(() => {
    if (isError) {
      shake.current?.start();
    }
  }, [isError]);

  const trailingElementList = (() => {
    const ret: React.ReactElement[] = [];
    if (is.notEmptyArray(trailingElements)) {
      ret.push(...trailingElements);
    }
    if (trailingIcon) {
      ret.push(<Icon name={trailingIcon} size={24} fill={trailingIconFill || palette.gray300} />);
    }

    if (is.emptyArray(ret) && !disabled && !readonly && is.notEmptyString(props.value)) {
      ret.push(
        <IconBtn
          name={'close_in_circle'}
          size={'m'}
          variant={'plain-gray300'}
          onPress={() => props.onChangeText?.('', '')}
          layout={{ marginRight: -spacing[1] }}
        />,
      );
    }
    return ret;
  })();

  return (
    <Shake ref={shake} style={style} disableFirstAnimation>
      {label ? Txt.XS.Medium.Gray700.render(label, { style: { marginBottom: spacing[1] } }) : null}
      <View
        style={{
          height: !props.multiline ? 54 : undefined,

          borderWidth: 1,
          borderColor: disabled ? palette.gray200 : isError ? palette.red500 : palette.gray200,
          borderRadius: 12,
          justifyContent: 'center',
          backgroundColor: disabled ? palette.gray100 : palette.white,
        }}
      >
        <Grid spacing={2} layout={{ marginHorizontal: spacing[5] }}>
          {leadingIcon ? (
            <Grid.Unit size={'min'}>
              <Icon name={leadingIcon} size={24} fill={palette.gray300} />
            </Grid.Unit>
          ) : null}
          <Grid.Unit size={'max'}>
            <CoreTextField
              ref={ref}
              style={[
                {
                  paddingTop: props.multiline ? spacing[4] : undefined,
                  paddingBottom: props.multiline ? spacing[4] : undefined,
                },
                textFieldStyle,
              ]}
              readonly={readonly}
              disabled={disabled}
              {...props}
            />
          </Grid.Unit>
          {trailingElementList.map((element, i) => (
            <Grid.Unit size={'min'} key={i}>
              {element}
            </Grid.Unit>
          ))}
        </Grid>
      </View>
      {isError || isSuccess || is.notEmptyString(helpText)
        ? Txt.XS.Medium.Color(isError ? palette.red500 : isSuccess ? palette.green500 : palette.gray400).render(
            errorText || helpText || successText,
            {
              style: { marginTop: spacing[1] },
              testID: errorText
                ? `${props.testID}/error`
                : isSuccess
                ? `${props.testID}/success`
                : `${props.testID}/helper`,
            },
          )
        : null}
      {!disabled && onPress ? (
        <Touch
          testID={`${props?.testID}/button`}
          activeOpacity={0}
          onPress={onPress}
          style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }}
        />
      ) : null}
    </Shake>
  );
};

export default React.forwardRef(BaseTextField);
export type { Props as BaseTextFieldProps };
