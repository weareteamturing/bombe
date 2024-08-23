import { View } from 'react-native';

import { palette } from '../theme';

import type { LayoutStyle } from './Layout';

type Props = {
  layout?: LayoutStyle;
  color?: string;
  size?: number;
};
const Badge = ({ layout, color = palette.violet500, size = 6 }: Props) => {
  return <View style={[{ borderRadius: 9999, backgroundColor: color, width: size, height: size }, layout]} />;
};

export { Badge };
