import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import { spacing, palette, gradient, Txt, PressableDelayed, LoadingIndicator } from '@teamturing/react-native-kit';
import { mix } from 'polished';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';

import is from '../../util/is';
import { type GradientCollecitonProps, GradientCollection } from '../GradientCollection';
import { type IconName, Icon } from '../Icon';
import type { LayoutStyle } from '../Layout/LayoutStyle';
import { RowCenter } from '../Layout/Row';
import type { UseDisabilityAwareDebouncerParams } from '../Pressable/useDisabilityAwareDebouncer';

export type BaseBtnSize = 'l' | 'm' | 's';
export type BaseBtnVariant =
  | 'primary'
  | 'secondary'
  | 'outlined'
  | 'text-gray700'
  | 'danger'
  | 'text-white'
  | 'gradient1'
  | 'gradient4'
  | 'gray';

const commonStyle: StyleProp<ViewStyle> = {
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 9999,
  overflow: 'hidden',
};
const styleBySize: Record<BaseBtnSize, StyleProp<ViewStyle>> = {
  l: {
    paddingHorizontal: spacing['4'],
    height: 48,
  },
  m: {
    paddingHorizontal: spacing['4'],
    height: 37,
  },
  s: {
    paddingHorizontal: spacing['3'],
    height: 26,
  },
};
const styleByFullWidth: Record<'true' | 'false', StyleProp<ViewStyle>> = {
  true: {},
  false: {
    alignSelf: 'center',
  },
};
const styleByVariant: Record<BaseBtnVariant, StyleProp<ViewStyle>> = {
  'primary': {
    backgroundColor: palette.violet500,
  },
  'secondary': {
    backgroundColor: palette.violet50,
  },
  'outlined': {
    backgroundColor: palette.white,
    borderWidth: 1,
    borderColor: palette.gray300,
  },
  'text-gray700': {
    backgroundColor: palette.transparent,
  },
  'danger': {
    backgroundColor: palette.red400,
  },
  'text-white': {
    backgroundColor: palette.transparent,
  },
  'gradient1': {
    backgroundColor: undefined,
  },
  'gradient4': {
    backgroundColor: undefined,
  },
  'gray': {
    backgroundColor: palette.gray100,
  },
};
const gradientCollectionPropsByVarient: Record<BaseBtnVariant, GradientCollecitonProps | undefined> = {
  'primary': undefined,
  'secondary': undefined,
  'outlined': undefined,
  'text-gray700': undefined,
  'danger': undefined,
  'text-white': undefined,
  'gradient1': {
    style: [StyleSheet.absoluteFill],
    ...gradient.gradient1,
  },
  'gradient4': {
    style: [StyleSheet.absoluteFill],
    ...gradient.gradient4,
  },
  'gray': undefined,
};
const pressedStyleByVariant: Record<BaseBtnVariant, StyleProp<ViewStyle>> = {
  'primary': {
    backgroundColor: palette.violet600,
  },
  'secondary': {
    backgroundColor: palette.violet100,
  },
  'outlined': {
    backgroundColor: palette.gray50,
    borderWidth: 1,
    borderColor: palette.gray200,
  },
  'text-gray700': {
    backgroundColor: palette.transparent,
  },
  'danger': {
    backgroundColor: palette.red500,
  },
  'text-white': {
    backgroundColor: palette.transparent,
  },
  'gradient1': {
    backgroundColor: undefined,
  },
  'gradient4': {
    backgroundColor: undefined,
  },
  'gray': {
    backgroundColor: palette.gray200,
  },
};
const disabledStyleByVariant: Record<BaseBtnVariant, StyleProp<ViewStyle>> = {
  'primary': {
    backgroundColor: palette.gray100,
  },
  'secondary': {
    backgroundColor: palette.gray100,
  },
  'outlined': {
    backgroundColor: palette.transparent,
    borderWidth: 1,
    borderColor: palette.gray200,
  },
  'text-gray700': {
    backgroundColor: palette.transparent,
  },
  'danger': {
    backgroundColor: palette.gray100,
  },
  'text-white': {
    backgroundColor: palette.transparent,
  },
  'gradient1': {
    backgroundColor: palette.gray100,
  },
  'gradient4': {
    backgroundColor: palette.gray100,
  },
  'gray': {
    backgroundColor: palette.gray100,
  },
};

const txtBySize = {
  l: Txt.M.Medium,
  m: Txt.S.Medium,
  s: Txt.XS.Medium,
};

const defaultContentColorByVariant: Record<BaseBtnVariant, string> = {
  'primary': palette.white,
  'secondary': palette.violet500,
  'outlined': palette.gray700,
  'text-gray700': palette.gray700,
  'danger': palette.white,
  'text-white': palette.white,
  'gradient1': palette.white,
  'gradient4': palette.white,
  'gray': palette.gray900,
};
const pressedContentColorByVariant: Record<BaseBtnVariant, string> = {
  ...defaultContentColorByVariant,
  'text-gray700': mix(0.3, palette.white, palette.gray700),
  'text-white': mix(0.2, palette.black, palette.white),
};
const disabledContentColorByVariant: Record<BaseBtnVariant, string> = {
  'primary': palette.gray400,
  'secondary': palette.gray400,
  'outlined': palette.gray200,
  'text-gray700': palette.gray200,
  'danger': palette.gray500,
  'text-white': mix(0.5, palette.black, palette.white),
  'gradient1': palette.gray400,
  'gradient4': palette.gray400,
  'gray': palette.gray400,
};

const visitedStyleByVariant: Record<BaseBtnVariant, StyleProp<ViewStyle>> = {
  'primary': {
    backgroundColor: palette.violet100,
  },
  'secondary': {},
  'outlined': {},
  'text-gray700': {},
  'danger': {},
  'text-white': {},
  'gradient1': {},
  'gradient4': {},
  'gray': {},
};
const loadingIndicatorColorByVariant: Record<BaseBtnVariant, string> = {
  'primary': palette.white,
  'secondary': palette.violet500,
  'outlined': palette.gray700,
  'text-gray700': palette.gray700,
  'text-white': palette.white,
  'danger': palette.white,
  'gradient1': palette.white,
  'gradient4': palette.white,
  'gray': palette.gray700,
};
const loadingStyleByVariant: Record<BaseBtnVariant, StyleProp<ViewStyle>> = {
  'primary': {
    backgroundColor: palette.violet300,
  },
  'secondary': {},
  'outlined': {},
  'text-gray700': {},
  'danger': {},
  'text-white': {},
  'gradient1': {},
  'gradient4': {},
  'gray': {},
};
const loadingGradientCollectionPropsByVarient: Record<BaseBtnVariant, GradientCollecitonProps | undefined> = {
  'primary': undefined,
  'secondary': undefined,
  'outlined': undefined,
  'text-gray700': undefined,
  'danger': undefined,
  'text-white': undefined,
  'gradient1': {
    style: [StyleSheet.absoluteFill, { opacity: 0.7 }],
    ...gradient.gradient1,
  },
  'gradient4': {
    style: [StyleSheet.absoluteFill, { opacity: 0.7 }],
    ...gradient.gradient4,
  },
  'gray': undefined,
};

const iconSizeBySize: Record<BaseBtnSize, number> = {
  l: 20,
  m: 16,
  s: 16,
};

type Props = {
  size?: BaseBtnSize;
  variant?: BaseBtnVariant;
  fullWidth?: boolean;
  loading?: boolean;
  visited?: boolean;
  text?: string;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  layout?: LayoutStyle;
} & Omit<PressableProps, 'style' | 'underlayColor'> &
  UseDisabilityAwareDebouncerParams &
  SxProps;

const BaseBtn = (props: Props) => {
  const { getStyle, filteredProps } = useSx(props);

  const {
    size = 'm',
    variant = 'primary',
    disabled = false,
    fullWidth = false,
    visited = false,
    loading = false,
    text,
    leadingIcon,
    trailingIcon,
    layout,
    onPress,
    testID,
    ...rest
  } = filteredProps;

  const contentColor = (pressed: boolean) =>
    pressed
      ? pressedContentColorByVariant[variant]
      : disabled
      ? disabledContentColorByVariant[variant]
      : defaultContentColorByVariant[variant];

  const isGradient = variant === 'gradient1' || variant === 'gradient4';

  return (
    <PressableDelayed
      style={({ pressed }) => [
        getStyle(),
        commonStyle,
        styleBySize[size],
        styleByFullWidth[fullWidth ? 'true' : 'false'],
        styleByVariant[variant],
        pressed ? pressedStyleByVariant[variant] : undefined,
        visited ? visitedStyleByVariant[variant] : undefined,
        disabled ? disabledStyleByVariant[variant] : undefined,
        loading ? loadingStyleByVariant[variant] : undefined,
        layout,
      ]}
      disabled={disabled || visited || loading}
      onPress={onPress}
      {...rest}
      testID={testID ?? text}
      accessibilityLabel={disabled ? 'disabled' : loading ? 'loading' : 'idle'}
    >
      {({ pressed }) => (
        <>
          {isGradient && loading ? (
            <GradientCollection {...loadingGradientCollectionPropsByVarient[variant]!} />
          ) : !isGradient || (isGradient && disabled) ? null : isGradient ? (
            <GradientCollection {...gradientCollectionPropsByVarient[variant]!} />
          ) : null}
          <RowCenter style={{ opacity: loading ? 0 : 1, gap: spacing[1] }}>
            {leadingIcon && <Icon name={leadingIcon} size={iconSizeBySize[size]} fill={contentColor(pressed)} />}
            {is.notEmptyString(text) ? txtBySize[size].Color(contentColor(pressed)).render(text) : null}
            {trailingIcon && <Icon name={trailingIcon} size={iconSizeBySize[size]} fill={contentColor(pressed)} />}
          </RowCenter>
          {loading ? (
            <LoadingIndicator
              color={loadingIndicatorColorByVariant[variant]}
              style={{ ...StyleSheet.absoluteFillObject }}
            />
          ) : null}
        </>
      )}
    </PressableDelayed>
  );
};

export default BaseBtn;
export type { Props as BaseBtnProps };
