import React, { forwardRef } from 'react';
import { Animated } from 'react-native';

import { type ImperativeAnimationProps, type ImperativeAnimationRef, ImperativeAnimation } from './ImperativeAnimation';

type Props = {
  duration?: number;
  slideInDuration?: number;
  slideOutDuration?: number;
  startTranslationY?: number;
  endTranslationY?: number;
} & ImperativeAnimationProps;
export const SlideInOut = forwardRef(
  (
    {
      duration = 5000,
      slideInDuration = 500,
      slideOutDuration = 500,
      startTranslationY = -50,
      endTranslationY = 50,
      ...rest
    }: Props,
    ref: React.Ref<ImperativeAnimationRef>,
  ) => {
    return (
      <ImperativeAnimation
        ref={ref}
        startAnimationValue={startTranslationY}
        buildAnimation={(value) =>
          Animated.sequence([
            Animated.timing(value, { useNativeDriver: true, toValue: 0, duration: slideInDuration }),
            Animated.delay(Math.max(0, duration - (slideInDuration + slideOutDuration))),
            Animated.timing(value, { useNativeDriver: true, toValue: endTranslationY, duration: slideOutDuration }),
          ])
        }
        buildAnimatedStyle={(value) => ({ transform: [{ translateY: value }] })}
        {...rest}
      />
    );
  },
);
