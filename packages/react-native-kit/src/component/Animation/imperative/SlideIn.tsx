import React, { forwardRef } from 'react';
import { Animated } from 'react-native';

import { type ImperativeAnimationProps, type ImperativeAnimationRef, ImperativeAnimation } from './ImperativeAnimation';

type Props = {
  duration?: number;
  startTranslationY?: number;
} & ImperativeAnimationProps;
export const SlideIn = forwardRef(
  ({ duration = 500, startTranslationY = -56, ...rest }: Props, ref: React.Ref<ImperativeAnimationRef>) => {
    return (
      <ImperativeAnimation
        ref={ref}
        startAnimationValue={startTranslationY}
        buildAnimation={(value) => Animated.timing(value, { useNativeDriver: true, toValue: 0, duration })}
        buildAnimatedStyle={(value) => ({ transform: [{ translateY: value }] })}
        {...rest}
      />
    );
  },
);
