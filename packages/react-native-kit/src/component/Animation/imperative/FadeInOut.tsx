import React, { forwardRef } from 'react';
import { Animated } from 'react-native';

import { type ImperativeAnimationRef, type ImperativeAnimationProps, ImperativeAnimation } from './ImperativeAnimation';

type Props = {
  duration?: number;
  fadeInDuration?: number;
  fadeOutDuration?: number;
} & ImperativeAnimationProps;
export const FadeInOut = forwardRef(
  (
    { duration = 5000, fadeInDuration = 500, fadeOutDuration = 500, ...rest }: Props,
    ref: React.Ref<ImperativeAnimationRef>,
  ) => {
    return (
      <ImperativeAnimation
        ref={ref}
        buildAnimation={(value) =>
          Animated.sequence([
            Animated.timing(value, { useNativeDriver: true, toValue: 1, duration: fadeInDuration }),
            Animated.delay(Math.max(0, duration - (fadeInDuration + fadeOutDuration))),
            Animated.timing(value, { useNativeDriver: true, toValue: 0, duration: fadeOutDuration }),
          ])
        }
        buildAnimatedStyle={(value) => ({ opacity: value })}
        {...rest}
      />
    );
  },
);
