import type { PropsWithChildren } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from 'react-native-reanimated';

import { useMount } from '../../../hook';

type Props = {
  style?: StyleProp<Omit<ViewStyle, 'transform'>>;
  duration?: number;
  translation?: number;
};
const LeftAndRight = ({ style, children, duration = 400, translation = 4 }: PropsWithChildren<Props>) => {
  const animValue = useSharedValue(0);
  const animStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: animValue.value }],
  }));
  useMount(() => {
    animValue.value = withRepeat(
      withTiming(translation, { duration: duration, easing: Easing.inOut(Easing.quad) }),
      -1,
      true,
    );
  });
  return <Animated.View style={[style, animStyle]}>{children}</Animated.View>;
};

export { LeftAndRight };
