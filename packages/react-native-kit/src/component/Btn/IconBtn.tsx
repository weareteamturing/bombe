import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import { palette, PressableDelayed, spacing, LoadingIndicator } from '@teamturing/react-native-kit';
import { mix } from 'polished';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

import { type IconName, type IconProps, Icon } from '../Icon';
import type { FlexibleLayoutStyle } from '../Layout/LayoutStyle';

type IconBtnSize = '56' | '40' | 'l' | 'm' | 's';
type IconBtnVariant =
  | 'primary'
  | 'secondary'
  | 'outlined'
  | 'plain-gray700'
  | 'plain-gray400'
  | 'plain-gray300'
  | 'plain-violet500'
  | 'plain-white'
  | 'danger';

const commonStyle: StyleProp<ViewStyle> = {
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 9999,
};
const styleBySize: Record<IconBtnSize, StyleProp<ViewStyle>> = {
  '56': {
    width: 56,
    height: 56,
  },
  '40': {
    width: 40,
    height: 40,
  },
  'l': {
    width: 48,
    height: 48,
  },
  'm': {
    width: 32,
    height: 32,
  },
  's': {
    width: 24,
    height: 24,
  },
};
const iconSizeBySize: Record<IconBtnSize, IconProps['size']> = {
  '56': 56,
  '40': 40,
  'l': 24,
  'm': 24,
  's': 16,
};

const styleByVariant: Record<IconBtnVariant, StyleProp<ViewStyle>> = {
  'primary': {
    backgroundColor: palette.violet500,
  },
  'secondary': {
    backgroundColor: palette.violet50,
  },
  'outlined': {
    backgroundColor: palette.transparent,
    borderWidth: 1,
    borderColor: palette.gray300,
  },
  'plain-gray700': {
    backgroundColor: palette.transparent,
  },
  'plain-gray400': {
    backgroundColor: palette.transparent,
  },
  'plain-gray300': {
    backgroundColor: palette.transparent,
  },
  'plain-violet500': {
    backgroundColor: palette.transparent,
  },
  'plain-white': {
    backgroundColor: palette.transparent,
  },
  'danger': {
    backgroundColor: palette.red400,
  },
};
const pressedStyleByVariant: Record<IconBtnVariant, StyleProp<ViewStyle>> = {
  'primary': {
    backgroundColor: mix(0.1, palette.black, palette.violet500),
  },
  'secondary': {
    backgroundColor: mix(0.03, palette.black, palette.violet50),
  },
  'outlined': {
    backgroundColor: mix(0.03, palette.black, palette.gray300),
    borderWidth: 1,
    borderColor: palette.gray300,
  },
  'plain-gray700': {
    backgroundColor: palette.transparent,
  },
  'plain-gray400': {
    backgroundColor: palette.transparent,
  },
  'plain-gray300': {
    backgroundColor: palette.transparent,
  },
  'plain-violet500': {
    backgroundColor: palette.transparent,
  },
  'plain-white': {
    backgroundColor: palette.transparent,
  },
  'danger': {
    backgroundColor: mix(0.1, palette.black, palette.red400),
  },
};
const disabledStyleByVariant: Record<IconBtnVariant, StyleProp<ViewStyle>> = {
  'primary': {
    backgroundColor: palette.gray100,
  },
  'secondary': {
    backgroundColor: palette.gray100,
  },
  'outlined': {
    backgroundColor: palette.gray100,
    borderWidth: 1,
    borderColor: palette.transparent,
  },
  'plain-gray700': {
    backgroundColor: palette.transparent,
  },
  'plain-gray400': {
    backgroundColor: palette.transparent,
  },
  'plain-gray300': {
    backgroundColor: palette.transparent,
  },
  'plain-violet500': {
    backgroundColor: palette.transparent,
  },
  'plain-white': {
    backgroundColor: palette.transparent,
  },
  'danger': {
    backgroundColor: palette.gray100,
  },
};

const iconFillByVariant: Record<IconBtnVariant, IconProps['fill']> = {
  'primary': palette.white,
  'secondary': palette.violet500,
  'outlined': palette.gray700,
  'plain-gray700': palette.gray700,
  'plain-gray400': palette.gray400,
  'plain-gray300': palette.gray300,
  'plain-violet500': palette.violet500,
  'plain-white': palette.white,
  'danger': palette.white,
};
const pressedIconFillByVariant: Record<IconBtnVariant, IconProps['fill']> = {
  'primary': palette.white,
  'secondary': palette.violet500,
  'outlined': palette.gray700,
  'plain-gray700': mix(0.1, palette.white, palette.gray700),
  'plain-gray400': mix(0.1, palette.white, palette.gray400),
  'plain-gray300': mix(0.03, palette.black, palette.gray300),
  'plain-violet500': mix(0.1, palette.white, palette.violet500),
  'plain-white': mix(0.1, palette.black, palette.white),
  'danger': palette.gray400,
};

const disabledIconFillByVariant: Record<IconBtnVariant, IconProps['fill']> = {
  'primary': palette.gray400,
  'secondary': palette.gray400,
  'outlined': palette.gray400,
  'plain-gray700': mix(0.7, palette.white, palette.gray700),
  'plain-gray400': mix(0.7, palette.white, palette.gray400),
  'plain-gray300': mix(0.3, palette.white, palette.gray300),
  'plain-violet500': mix(0.7, palette.white, palette.violet500),
  'plain-white': mix(0.4, palette.black, palette.white),
  'danger': palette.gray400,
};
const visitedStyleByVariant: Record<IconBtnVariant, StyleProp<ViewStyle>> = {
  'primary': {
    backgroundColor: mix(0.7, palette.white, palette.violet500),
  },
  'secondary': {},
  'outlined': {},
  'plain-gray700': {},
  'plain-gray400': {},
  'plain-gray300': {},
  'plain-violet500': {},
  'plain-white': {},
  'danger': {},
};
const loadingStyleByVariant: Record<IconBtnVariant, StyleProp<ViewStyle>> = {
  'primary': {
    backgroundColor: mix(0.5, palette.white, palette.violet500),
  },
  'secondary': {
    backgroundColor: palette.violet50,
  },
  'outlined': {
    backgroundColor: palette.transparent,
    borderWidth: 1,
    borderColor: palette.gray300,
  },
  'plain-gray700': {
    backgroundColor: palette.transparent,
  },
  'plain-gray400': {
    backgroundColor: palette.transparent,
  },
  'plain-gray300': {
    backgroundColor: palette.transparent,
  },
  'plain-violet500': {
    backgroundColor: palette.transparent,
  },
  'plain-white': {
    backgroundColor: palette.transparent,
  },
  'danger': {
    backgroundColor: palette.red400,
  },
};
const loadingMathKingIndicatorColorByVariant = {
  'primary': palette.white,
  'secondary': palette.violet500,
  'outlined': palette.gray700,
  'plain-gray700': palette.gray700,
  'plain-gray400': palette.gray400,
  'plain-gray300': palette.gray300,
  'plain-violet500': palette.violet500,
  'plain-white': palette.white,
  'danger': palette.white,
};

type Props = {
  name: IconName;
  size?: IconBtnSize;
  variant?: IconBtnVariant;
  loading?: boolean;
  visited?: boolean;
  layout?: FlexibleLayoutStyle;
  delayAfterEvent?: number;
  delayAfterEnabled?: number;
} & Omit<PressableProps, 'style' | 'underlayColor'> &
  SxProps;

const IconBtn = (props: Props) => {
  const { getStyle, filteredProps } = useSx(props);

  const {
    name,
    size = 'm',
    variant = 'primary',
    disabled = false,
    visited = false,
    loading = false,
    layout,
    onPress,
    delayAfterEnabled,
    delayAfterEvent,
    ...rest
  } = filteredProps;

  const pressable = !(disabled || visited || loading);

  return (
    <PressableDelayed
      style={({ pressed }) => [
        getStyle(),
        commonStyle,
        styleBySize[size],
        styleByVariant[variant],
        pressed ? pressedStyleByVariant[variant] : undefined,
        visited ? visitedStyleByVariant[variant] : undefined,
        disabled ? disabledStyleByVariant[variant] : undefined,
        loading ? loadingStyleByVariant[variant] : undefined,
        layout,
      ]}
      disabled={!pressable}
      hitSlop={{ top: spacing[1], right: spacing[1], bottom: spacing[1], left: spacing[1] }}
      onPress={onPress}
      delayAfterEnabled={delayAfterEnabled}
      delayAfterEvent={delayAfterEvent}
      {...rest}
    >
      {({ pressed }) =>
        loading ? (
          <LoadingIndicator size={iconSizeBySize[size]} color={loadingMathKingIndicatorColorByVariant[variant]} />
        ) : (
          <Icon
            name={name}
            size={iconSizeBySize[size]}
            fill={
              disabled
                ? disabledIconFillByVariant[variant]
                : pressed
                ? pressedIconFillByVariant[variant]
                : iconFillByVariant[variant]
            }
          />
        )
      }
    </PressableDelayed>
  );
};

export type { Props as IconBtnProps };
export { IconBtn };
