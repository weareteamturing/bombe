import type { SxProps } from '@react-native-styled-system/core';
import { px, palette, Txt, gradient, type TextConfig, spacing, GradientCollection } from '@teamturing/react-native-kit';
import { transparentize } from 'polished';
import React from 'react';
import { StyleSheet } from 'react-native';

import type { BoxProps } from './Box';
import { Box } from './Box';
import type { GradientCollecitonProps } from './GradientCollection';
import type { IconName, IconProps } from './Icon';
import { Icon } from './Icon';

export type ChipSize = 'l' | 'm' | 's';
export type ChipVariant =
  | 'primary'
  | 'secondary'
  | 'outlined'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'gradient1'
  | 'dim'
  | 'outlined-gray300'
  | 'blue'
  | 'blue50';

const commonStyle: SxProps = {
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 9999,
  overflow: 'hidden',
};
const styleBySize: Record<ChipSize, SxProps> = {
  l: {
    px: 2,
    h: px(29),
  },
  m: {
    px: 2,
    h: px(26),
  },
  s: {
    px: 2,
    h: px(19),
  },
};
const styleByVariant: Record<ChipVariant, SxProps> = {
  'primary': {
    backgroundColor: 'violet500',
  },
  'secondary': {
    backgroundColor: 'violet50',
  },
  'outlined': {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'violet500',
  },
  'gray': {
    backgroundColor: 'gray100',
  },
  'red': {
    backgroundColor: 'red50',
  },
  'yellow': {
    backgroundColor: 'yellow50',
  },
  'green': {
    backgroundColor: 'green50',
  },
  'gradient1': {},
  'dim': {
    backgroundColor: transparentize(0.4, palette.black),
  },
  'outlined-gray300': {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'gray300',
  },
  'blue': {
    backgroundColor: 'blue500',
  },
  'blue50': {
    backgroundColor: 'blue50',
  },
};
const gradientCollectionPropsByVarient: Record<ChipVariant, GradientCollecitonProps | undefined> = {
  'primary': undefined,
  'secondary': undefined,
  'outlined': undefined,
  'gray': undefined,
  'red': undefined,
  'yellow': undefined,
  'green': undefined,
  'gradient1': {
    style: [StyleSheet.absoluteFill],
    ...gradient.gradient1,
  },
  'dim': undefined,
  'outlined-gray300': undefined,
  'blue': undefined,
  'blue50': undefined,
};
const txtBySize = {
  l: Txt.S.Medium,
  m: Txt.XS.Medium,
  s: Txt.XXS.Medium,
};
const txtConfigByVariant: Record<ChipVariant, Partial<TextConfig>> = {
  'primary': {
    color: palette.white,
  },
  'secondary': {
    color: palette.violet500,
  },
  'outlined': {
    color: palette.violet500,
  },
  'gray': {
    color: palette.gray700,
  },
  'red': {
    color: palette.red500,
  },
  'yellow': {
    color: palette.yellow500,
  },
  'green': {
    color: palette.green500,
  },
  'gradient1': { color: palette.white },
  'dim': { color: palette.white },
  'outlined-gray300': {
    color: palette.gray700,
  },
  'blue': { color: palette.white },
  'blue50': {
    color: palette.blue500,
  },
};
const iconSpacingBySize: Record<ChipSize, keyof typeof spacing> = {
  l: 1,
  m: 0.5,
  s: 0,
};

type Props = {
  size?: ChipSize;
  variant?: ChipVariant;
  text?: string;
  leadingIcon?: IconName;
  renderLeadingIcon?: (iconProps: IconProps) => React.ReactNode;
  trailingIcon?: IconName;
  renderTrailingIcon?: (iconProps: IconProps) => React.ReactNode;
  pointerEvents?: BoxProps['pointerEvents'];
} & SxProps;

const Chip = ({
  size = 'm',
  variant = 'primary',
  text,
  leadingIcon,
  renderLeadingIcon = (iconProps) => <Icon {...iconProps} />,
  trailingIcon,
  renderTrailingIcon = (iconProps) => <Icon {...iconProps} />,
  pointerEvents,
  ...sxProps
}: Props) => {
  return (
    <Box
      sx={{ ...commonStyle, ...sxProps, ...styleBySize[size], ...styleByVariant[variant] }}
      pointerEvents={pointerEvents}
    >
      {variant === 'gradient1' ? <GradientCollection {...gradientCollectionPropsByVarient[variant]!} /> : null}
      {leadingIcon
        ? renderLeadingIcon({
            name: leadingIcon,
            size: 16,
            mr: text ? iconSpacingBySize[size] : 0,
            fill: txtConfigByVariant[variant].color,
          })
        : null}
      {txtBySize[size].render(text, txtConfigByVariant[variant])}
      {trailingIcon
        ? renderTrailingIcon({
            name: trailingIcon,
            size: 16,
            ml: text ? iconSpacingBySize[size] : 0,
            fill: txtConfigByVariant[variant].color,
          })
        : null}
    </Box>
  );
};

export { Chip };
export type { Props as ChipProps };
