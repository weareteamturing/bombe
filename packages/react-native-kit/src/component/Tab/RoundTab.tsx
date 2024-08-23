import { Txt, FontWeight, spacing, palette, is, Dot, px } from '@teamturing/react-native-kit';
import type { ColorValue, ViewStyle } from 'react-native';

import { Box } from '../Box';
import type { IconName, IconProps } from '../Icon';
import { Icon } from '../Icon';
import { Row, RowCenter } from '../Layout';

import { type BaseTabPropsWithoutRenderProps, BaseTab } from './BaseTab';

type RoundTabSize = 'l' | 'm' | 's';
type Variant = 'default' | 'plain' | 'dim';
const TextComponentBySize: Record<RoundTabSize, Txt> = {
  l: Txt.M,
  m: Txt.S,
  s: Txt.XS,
};
const StyleBySize: Record<
  RoundTabSize,
  { selectedFontWeight: FontWeight; iconSize: number; paddingHorizontal: number }
> = {
  l: {
    selectedFontWeight: FontWeight.Bold,
    iconSize: 20,
    paddingHorizontal: spacing[4],
  },
  m: {
    selectedFontWeight: FontWeight.Medium,
    iconSize: 20,
    paddingHorizontal: spacing[4],
  },
  s: {
    selectedFontWeight: FontWeight.Medium,
    iconSize: 16,
    paddingHorizontal: spacing[3],
  },
};
const StyleByVariant: Record<Variant, { backgroundColor: ColorValue; padding: number; gap: number }> = {
  default: {
    backgroundColor: palette.gray100,
    padding: spacing[1],
    gap: spacing[0],
  },
  plain: {
    backgroundColor: palette.white,
    padding: 0,
    gap: spacing[3],
  },
  dim: {
    backgroundColor: palette.transparent,
    padding: 0,
    gap: spacing[3],
  },
};
const ContextualStyleByVariant: ({ isSelected }: { isSelected: boolean }) => Record<
  Variant,
  {
    tabItemStyle: ViewStyle;
    iconProps: Partial<Omit<IconProps, 'name'>>;
    textColor: ColorValue;
  }
> = ({ isSelected }) => ({
  default: {
    tabItemStyle: {
      backgroundColor: isSelected ? palette.white : palette.transparent,

      borderWidth: 1,
      borderColor: isSelected ? palette.gray200 : palette.transparent,
    },
    iconProps: {
      fill: isSelected ? palette.gray900 : palette.gray300,
    },
    textColor: isSelected ? palette.gray900 : palette.gray500,
  },
  plain: {
    tabItemStyle: {
      backgroundColor: isSelected ? palette.gray100 : palette.transparent,
    },
    iconProps: {
      fill: isSelected ? palette.gray900 : palette.gray300,
    },
    textColor: isSelected ? palette.gray900 : palette.gray500,
  },
  dim: {
    tabItemStyle: {
      backgroundColor: isSelected ? palette.gray900 : palette.transparent,
    },
    iconProps: {
      fill: palette.gray300,
    },
    textColor: isSelected ? palette.white : palette.gray300,
  },
});

type Props = {
  size?: RoundTabSize;
  redDotIndice?: number[];
  variant?: Variant;
  leadingIcons?: ({ active: IconName; inActive: IconName } | null)[];
} & BaseTabPropsWithoutRenderProps;
const RoundTab = ({ size = 'm', redDotIndice = [], variant = 'default', leadingIcons, ...rest }: Props) => {
  const { backgroundColor, padding, gap } = StyleByVariant[variant];
  return (
    <BaseTab
      renderContainer={(children) => (
        <Row
          style={{
            backgroundColor: backgroundColor,
            borderRadius: 9999,
            padding,
            gap,
          }}
        >
          {children}
        </Row>
      )}
      renderTab={({ isSelected, text, index }) => {
        const { iconProps, tabItemStyle, textColor } = ContextualStyleByVariant({ isSelected })[variant];
        const { iconSize, selectedFontWeight, paddingHorizontal } = StyleBySize[size];
        const textElement = isSelected
          ? TextComponentBySize[size].render(text, { weight: selectedFontWeight, color: textColor })
          : TextComponentBySize[size].render(text, { color: textColor });

        const activeIcon =
          leadingIcons && leadingIcons.length > index && is.plainObject(leadingIcons[index])
            ? leadingIcons[index]!.active
            : null;
        const inActiveIcon =
          leadingIcons && leadingIcons.length > index && is.plainObject(leadingIcons[index])
            ? leadingIcons[index]!.inActive
            : null;

        return (
          <Box
            center
            style={[
              {
                borderRadius: 9999,
                paddingVertical: spacing[2],
                paddingHorizontal: paddingHorizontal,
                width: '100%',
              },
              tabItemStyle,
            ]}
          >
            <RowCenter style={{ gap: spacing[1] }}>
              {activeIcon && inActiveIcon ? (
                <Icon size={iconSize} {...iconProps} name={isSelected ? activeIcon : inActiveIcon} />
              ) : null}
              {textElement}
              {redDotIndice?.includes(index) ? (
                <Dot color={'red500'} size={6} sx={{ position: 'absolute', top: px(-2), right: px(-8) }} />
              ) : null}
            </RowCenter>
          </Box>
        );
      }}
      stretchItemWidth={variant === 'default'}
      {...rest}
    />
  );
};

export { RoundTab };
