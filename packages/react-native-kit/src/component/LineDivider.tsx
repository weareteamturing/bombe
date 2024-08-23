import type { ColorValue, StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { palette, flatStyle } from '@teamturing/react-native-kit';

type Props = {
  style?: StyleProp<ViewStyle>;
  color?: ColorValue;
  marginTop?: number;
  marginBottom?: number;
  marginVertical?: number;
  height?: number;
};
const LineDivider = ({
  color = palette.gray200,
  style,
  marginBottom: _marginBottom,
  marginTop: _marginTop,
  marginVertical,
  height: _height,
}: Props) => {
  const flatten = flatStyle(style);
  const backgroundColor = flatten?.backgroundColor || color;
  const marginTop = flatten?.marginTop || flatten?.marginVertical || _marginTop || marginVertical;
  const marginBottom = flatten?.marginBottom || flatten?.marginVertical || _marginBottom || marginVertical;
  const height = _height || flatten?.height || 1;
  return <View style={[style, { height, backgroundColor, marginTop, marginBottom }]} />;
};

export { LineDivider };
