import React, { forwardRef } from 'react';
import { Animated, Easing } from 'react-native';

import { type ImperativeAnimationProps, type ImperativeAnimationRef, ImperativeAnimation } from './ImperativeAnimation';

type Props = { duration?: number; iterations?: number; shakeX?: number } & ImperativeAnimationProps;
export const Shake = forwardRef(
  ({ duration = 70, iterations = 10, shakeX = 1.5, ...rest }: Props, ref: React.Ref<ImperativeAnimationRef>) => {
    return (
      <ImperativeAnimation
        ref={ref}
        disableFirstAnimation
        enableResetAtRestart
        buildAnimation={(value) =>
          Animated.loop(
            Animated.timing(value, {
              toValue: 1,
              easing: Easing.linear,
              duration,
              useNativeDriver: true,
            }),
            { iterations },
          )
        }
        buildAnimatedStyle={(value) => ({
          transform: [{ translateX: value.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0, shakeX, 0] }) }],
        })}
        {...rest}
      />
    );
  },
);
