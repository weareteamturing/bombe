import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import type { StyleProp, ViewStyle } from 'react-native';
import { ActivityIndicator } from 'react-native';

import { palette } from '../theme';
import { is } from '../util';

export type LoadingIndicatorProps = {
  testID?: string;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
} & SxProps;
const LoadingIndicator = (props: LoadingIndicatorProps) => {
  const { getStyle, filteredProps } = useSx(props);
  const { testID, size, color = palette.gray400 } = filteredProps;
  return (
    <ActivityIndicator
      {...{ testID, color }}
      style={getStyle()}
      size={is.number(size) && size > 24 ? 'large' : 'small'}
      pointerEvents={'none'}
    />
  );
};

export { LoadingIndicator };
