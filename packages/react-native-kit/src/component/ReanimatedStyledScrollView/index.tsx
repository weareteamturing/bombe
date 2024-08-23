import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import type { PropsWithChildren, ForwardedRef } from 'react';
import { forwardRef } from 'react';
import type { AnimatedScrollViewProps } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

type ReanimatedStyledScrollViewProps = PropsWithChildren<{
  contentContainerSx?: SxProps;
}> &
  AnimatedScrollViewProps &
  SxProps;
const ReanimatedStyledScrollView = forwardRef(
  (props: ReanimatedStyledScrollViewProps, ref: ForwardedRef<Animated.ScrollView>) => {
    const { filteredProps, getStyle } = useSx(props);
    const { getStyle: contentContainerStyle } = useSx(props.contentContainerSx);
    return (
      <Animated.ScrollView
        ref={ref}
        style={getStyle()}
        contentContainerStyle={contentContainerStyle()}
        {...filteredProps}
      />
    );
  },
);

export { ReanimatedStyledScrollView };
export type { ReanimatedStyledScrollViewProps };
