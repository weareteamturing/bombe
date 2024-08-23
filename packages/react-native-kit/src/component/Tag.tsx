import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import {
  Txt,
  type TextConfig,
  palette,
  spacing,
  gradient,
  type LayoutStyle,
  Touch,
} from '@teamturing/react-native-kit';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';

import { type GradientCollecitonProps, GradientCollection } from './GradientCollection';
import { type IconName, type IconProps, Icon } from './Icon';

export type TagSize = 'm' | 's';
export type TagVariant = 'gray-900' | 'violet-500' | 'outlined' | 'gradient1' | 'plain';

const commonStyle: StyleProp<ViewStyle> = {
  alignSelf: 'flex-start',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 9999,
  overflow: 'hidden',

  backgroundColor: palette.transparent,
  borderWidth: 1,
  borderColor: palette.gray200,
};
const stylesByFullWidth: Record<'true' | 'false', ViewStyle> = {
  true: { alignSelf: 'stretch' },
  false: {},
};
const styleBySize: Record<TagSize, StyleProp<ViewStyle>> = {
  m: {
    paddingVertical: spacing['2'],
    minHeight: 38,
    paddingHorizontal: spacing['3'],
  },
  s: {
    paddingVertical: spacing['2'],
    minHeight: 34,
    paddingHorizontal: spacing['3'],
  },
};
const additionalStyleByVariant: Record<TagVariant, StyleProp<ViewStyle>> = {
  'gray-900': {},
  'violet-500': {},
  'outlined': {},
  'gradient1': {},
  'plain': {
    borderColor: palette.transparent,
  },
};

const selectedStyleByVariant: Record<TagVariant, StyleProp<ViewStyle>> = {
  'gray-900': {
    backgroundColor: palette.gray900,
    borderColor: palette.gray900,
  },
  'violet-500': {
    backgroundColor: palette.violet50,
    borderColor: palette.violet50,
  },
  'outlined': {
    borderColor: palette.violet500,
  },
  'gradient1': {},
  'plain': {},
};
const selectedGradientCollectionPropsByVarient: Record<TagVariant, GradientCollecitonProps | undefined> = {
  'gray-900': undefined,
  'violet-500': undefined,
  'outlined': undefined,
  'gradient1': {
    style: [StyleSheet.absoluteFill],
    ...gradient.gradient1,
  },
  'plain': undefined,
};
const txtBySize = {
  m: Txt.S.Medium,
  s: Txt.XS.Medium,
};
const txtConfigByVariant: Record<TagVariant, Partial<TextConfig>> = {
  'gray-900': {
    color: palette.gray500,
  },
  'violet-500': {
    color: palette.gray500,
  },
  'outlined': {
    color: palette.gray500,
  },
  'gradient1': {
    color: palette.gray500,
  },
  'plain': {
    color: palette.gray500,
  },
};
const selectedTxtConfigByVariant: Record<TagVariant, Partial<TextConfig>> = {
  'gray-900': {
    color: palette.white,
  },
  'violet-500': {
    color: palette.violet500,
  },
  'outlined': {
    color: palette.violet500,
  },
  'gradient1': {
    color: palette.white,
  },
  'plain': {
    color: palette.gray900,
  },
};

export type TagProps = {
  size?: TagSize;
  variant?: TagVariant;
  text?: string;
  leadingIcon?: IconName;
  renderLeadingIcon?: (iconProps: IconProps) => React.ReactNode;
  trailingIcon?: IconName;
  renderTrailingIcon?: (iconProps: IconProps) => React.ReactNode;
  value?: boolean;
  onPress?: () => void;
  layout?: StyleProp<LayoutStyle>;
  fullWidth?: boolean;
  testID?: string;
} & SxProps;

const Tag = (props: React.PropsWithChildren<TagProps>) => {
  const { getStyle, filteredProps } = useSx(props);
  const {
    size = 'm',
    variant = 'gray-900',
    text,
    leadingIcon,
    renderLeadingIcon = (iconProps) => <Icon {...iconProps} />,
    trailingIcon,
    renderTrailingIcon = (iconProps) => <Icon {...iconProps} />,
    value = false,
    onPress,
    layout,
    fullWidth,
    testID,
  } = filteredProps;
  return (
    <Touch
      testID={testID}
      style={[
        getStyle(),
        commonStyle,
        additionalStyleByVariant[variant],
        stylesByFullWidth[fullWidth ? 'true' : 'false'],
        styleBySize[size],
        value ? selectedStyleByVariant[variant] : undefined,
        layout,
      ]}
      onPress={onPress}
    >
      {variant === 'gradient1' && value === true ? (
        <GradientCollection {...selectedGradientCollectionPropsByVarient[variant]!} />
      ) : null}
      {leadingIcon
        ? renderLeadingIcon({
            name: leadingIcon,
            size: 16,
            mr: 1,
            fill: (value ? selectedTxtConfigByVariant[variant] : txtConfigByVariant[variant]).color as string,
          })
        : null}
      {txtBySize[size].render(text, value ? selectedTxtConfigByVariant[variant] : txtConfigByVariant[variant])}
      {trailingIcon
        ? renderTrailingIcon({
            name: trailingIcon,
            size: 16,
            ml: 1,
            fill: (value ? selectedTxtConfigByVariant[variant] : txtConfigByVariant[variant]).color as string,
          })
        : null}
    </Touch>
  );
};

export { Tag };
