import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { type PaletteColor, is, palette, spacing, Txt } from '@teamturing/react-native-kit';

type Props = {
  count?: number;
  maxCount?: number;
  style?: StyleProp<ViewStyle>;
  text?: string;
  borderWidth?: number;
  borderColor?: PaletteColor;
  backgroundColor?: PaletteColor;
  textColor?: PaletteColor;
};
const NumberBadge = ({
  count = 0,
  maxCount = 99,
  style,
  text: textProp,
  borderWidth = 2,
  borderColor = 'white',
  backgroundColor = 'red500',
  textColor = 'white',
}: Props) => {
  if (count === 0 && !is.notEmptyString(textProp)) {
    return null;
  }
  const text = is.notEmptyString(textProp) ? textProp : count <= maxCount ? count + '' : `${maxCount}+`;
  return (
    <View
      style={[
        {
          backgroundColor: palette[borderColor],
          padding: borderWidth,
          borderRadius: 999,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
      pointerEvents={'none'}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: palette[backgroundColor],
          borderRadius: 999,
          paddingHorizontal: spacing[1],
          minWidth: 19,
          minHeight: 19,
        }}
      >
        {Txt.XXS.Medium.Color(palette[textColor]).render(text)}
      </View>
    </View>
  );
};

export { NumberBadge };
