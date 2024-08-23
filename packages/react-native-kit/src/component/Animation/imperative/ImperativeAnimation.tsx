import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import React, { useRef, useCallback, useEffect, useImperativeHandle, forwardRef } from 'react';
import type { ViewStyle, ViewProps } from 'react-native';
import { Animated } from 'react-native';

import { useTimeoutHandler, useUnmount } from '../../../hook';
import { is } from '../../../util';

type Props = React.PropsWithChildren<
  {
    startAnimationValue?: number;
    enableResetAtRestart?: boolean;
    disableFirstAnimation?: boolean;
    buildAnimation: (value: Animated.Value) => Animated.CompositeAnimation;
    buildAnimatedStyle: (value: Animated.Value) => Animated.AnimatedProps<ViewStyle>;
    delay?: number;
    onAnimationComplete?: () => void;
  } & Animated.AnimatedProps<ViewProps> &
    SxProps
>;

export type ImperativeAnimationProps = Omit<Props, 'buildAnimatedStyle' | 'buildAnimation'>;

export type ImperativeAnimationRef = {
  start: () => void;
  reset: () => void;
};

const ImperativeAnimation = forwardRef((props: Props, ref: React.Ref<ImperativeAnimationRef>) => {
  const { getStyle, filteredProps } = useSx(props);
  const {
    enableResetAtRestart,
    disableFirstAnimation,
    buildAnimation,
    buildAnimatedStyle,
    startAnimationValue = 0,
    delay = 0,
    onAnimationComplete,
    ...rest
  } = filteredProps;

  const onAnimationCompleteRef = useRef<Function>();
  onAnimationCompleteRef.current = onAnimationComplete;
  const value = useRef(new Animated.Value(startAnimationValue)).current;

  const anim = useRef<Animated.CompositeAnimation>();
  const startAnimation = useCallback(() => {
    anim.current?.stop();
    if (enableResetAtRestart) {
      value.setValue(startAnimationValue);
    }
    anim.current = buildAnimation(value);
    if (is.function(onAnimationCompleteRef.current)) {
      anim.current?.start(({ finished }) => {
        if (finished) {
          onAnimationCompleteRef.current?.();
        }
      });
    } else {
      anim.current?.start();
    }
  }, [value, enableResetAtRestart, buildAnimation, startAnimationValue]);

  const isFirstAnimation = useRef(true);

  const delayTimeoutHandler = useTimeoutHandler();
  useEffect(() => {
    if (isFirstAnimation.current) {
      if (!disableFirstAnimation) {
        if (delay > 0) {
          delayTimeoutHandler.current = setTimeout(startAnimation, delay);
        } else {
          startAnimation();
        }
      }
      isFirstAnimation.current = false;
    }
  }, [startAnimation, disableFirstAnimation, delay, delayTimeoutHandler]);
  useUnmount(() => {
    anim.current?.stop();
  });

  useImperativeHandle(
    ref,
    () => ({
      start: startAnimation,
      reset: () => {
        anim.current?.stop();
        value.setValue(startAnimationValue);
      },
    }),
    [startAnimation, startAnimationValue, value],
  );

  return <Animated.View style={[getStyle(), buildAnimatedStyle(value)]} {...rest} />;
});

export { ImperativeAnimation };
