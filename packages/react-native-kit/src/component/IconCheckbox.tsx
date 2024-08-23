import type { ReactElement } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Pressable } from 'react-native';

import { palette, type Spacing, spacing } from '../theme';
import { is } from '../util';

import { type IconName, type IconProps, Icon } from './Icon';
import { type LayoutStyle, RowCenter } from './Layout';

export type IconCheckboxSize = 'm' | 's' | 's20';
export type IconCheckboxVariant = 'check-primary' | 'check-circle-gray900' | 'check-circle-violet500';

const iconByVariant: Record<
  IconCheckboxVariant,
  { name: IconName; pressedFill: IconProps['fill']; defaultFill: IconProps['fill'] }
> = {
  'check-primary': { name: 'check', pressedFill: palette.violet500, defaultFill: palette.gray200 },
  'check-circle-gray900': { name: 'check_in_circle', pressedFill: palette.gray900, defaultFill: palette.gray200 },
  'check-circle-violet500': {
    name: 'check_in_circle',
    pressedFill: palette.violet500,
    defaultFill: palette.gray100,
  },
};

const iconSizeBySize: Record<IconCheckboxSize, IconProps['size']> = {
  m: 24,
  s20: 20,
  s: 16,
};

export type IconCheckboxProps = {
  value?: boolean;
  onPress?: () => void;
  size?: IconCheckboxSize;
  layout?: LayoutStyle;
  variant?: IconCheckboxVariant;
  readonly?: boolean;
  testID?: string;
  renderTrailing?: (params: { value: boolean }) => ReactElement;
  horizontalGap?: Spacing;
};

const IconCheckbox = ({
  value,
  onPress,
  size = 'm',
  layout,
  variant = 'check-circle-gray900',
  readonly = false,
  testID,
  renderTrailing,
  horizontalGap = 1,
}: IconCheckboxProps) => {
  const commonStyle: StyleProp<ViewStyle> = {
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Pressable
      testID={testID}
      style={[commonStyle, layout]}
      hitSlop={spacing[2]}
      onPress={() => onPress?.()}
      pointerEvents={readonly ? 'none' : 'auto'}
    >
      <RowCenter gapX={horizontalGap}>
        <Icon
          name={iconByVariant[variant].name}
          fill={value ? iconByVariant[variant].pressedFill : iconByVariant[variant].defaultFill}
          size={iconSizeBySize[size]}
        />
        {is.function(renderTrailing) && renderTrailing({ value: !!value })}
      </RowCenter>
    </Pressable>
  );
};

export { IconCheckbox };
