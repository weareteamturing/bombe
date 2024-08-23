import React, { forwardRef } from 'react';
import { Animated } from 'react-native';

import { type ImperativeAnimationProps, type ImperativeAnimationRef, ImperativeAnimation } from './ImperativeAnimation';

type Props = {
  duration?: number;
  alphaFrom?: number;
  alphaTo?: number;
} & ImperativeAnimationProps;
export const FadeIn = forwardRef(
  ({ duration = 500, alphaFrom = 0, alphaTo = 1, ...rest }: Props, ref: React.Ref<ImperativeAnimationRef>) => {
    return (
      <ImperativeAnimation
        ref={ref}
        startAnimationValue={alphaFrom}
        buildAnimation={(value) => Animated.timing(value, { useNativeDriver: true, toValue: alphaTo, duration })}
        buildAnimatedStyle={(value) => ({ opacity: value })}
        {...rest}
      />
    );
  },
);
