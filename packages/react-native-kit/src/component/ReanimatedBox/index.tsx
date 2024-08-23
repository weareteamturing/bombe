import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import type { PropsWithChildren, ForwardedRef } from 'react';
import { forwardRef } from 'react';
import type { ViewProps } from 'react-native';
import type { AnimatedProps } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

type ReanimatedBoxProps = PropsWithChildren<{}> & AnimatedProps<ViewProps> & SxProps;
const ReanimatedBox = forwardRef((props: ReanimatedBoxProps, ref: ForwardedRef<Animated.View>) => {
  const { filteredProps, getStyle } = useSx(props);
  return <Animated.View ref={ref} style={getStyle()} {...filteredProps} />;
});

export { ReanimatedBox };
export type { ReanimatedBoxProps };
