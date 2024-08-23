import React, { useRef, useCallback, useEffect, useImperativeHandle, forwardRef } from 'react';
import type { ViewStyle, ViewProps } from 'react-native';
import { Animated, View } from 'react-native';

import { is, useTimeoutHandler } from '@teamturing/react-native-kit';

type Props = React.PropsWithChildren<
  {
    startAnimationValue?: number;
    enableResetAtRestart?: boolean;
    disableFirstAnimation?: boolean;
    buildAnimatedStyle: (value: Animated.Value) => ViewStyle;
    delay?: number;
    onAnimationComplete?: () => void;
  } & ViewProps
>;

export type ImperativeAnimationProps = Omit<Props, 'buildAnimatedStyle' | 'buildAnimation'>;

export type ImperativeAnimationRef = {
  start: () => void;
  reset: () => void;
};

export const ImperativeAnimation = forwardRef(
  (
    {
      enableResetAtRestart,
      disableFirstAnimation,
      buildAnimatedStyle,
      style,
      startAnimationValue = 0,
      delay = 0,
      onAnimationComplete,
      ...rest
    }: Props,
    ref: React.Ref<ImperativeAnimationRef>,
  ) => {
    const onAnimationCompleteRef = useRef<Function>();
    onAnimationCompleteRef.current = onAnimationComplete;
    const value = useRef(new Animated.Value(startAnimationValue)).current;

    const startAnimation = useCallback(() => {
      if (enableResetAtRestart) {
        value.setValue(startAnimationValue);
      }
      if (is.function(onAnimationCompleteRef.current)) {
        onAnimationCompleteRef.current?.();
      }
    }, [value, enableResetAtRestart, startAnimationValue]);

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

    useImperativeHandle(
      ref,
      () => ({
        start: startAnimation,
        reset: () => {
          value.setValue(startAnimationValue);
        },
      }),
      [startAnimation, startAnimationValue, value],
    );

    return <View style={[style, buildAnimatedStyle(value)]} {...rest} />;
  },
);
