import React, { useEffect, useRef } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Animated, Easing } from 'react-native';

type Props = {
  delay?: number;
  style?: StyleProp<ViewStyle>;
};

const ZoomIn = ({ delay = 0, style, children }: React.PropsWithChildren<Props>) => {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.timing(scale, {
      useNativeDriver: true,
      toValue: 1,
      duration: 700,
      delay,
      easing: Easing.bezier(0, 1.59, 0.78, 1.01),
    });
    animation.start();

    return animation.stop;
  }, [delay, scale]);

  return <Animated.View style={[{ alignSelf: 'flex-start', transform: [{ scale }] }, style]}>{children}</Animated.View>;
};

export { ZoomIn };
