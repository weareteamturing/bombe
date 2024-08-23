import { is } from '@teamturing/react-native-kit';
import type { LottieViewProps as BaseLottieProps } from 'lottie-react-native';
import BaseLottie from 'lottie-react-native';
import { useState, useEffect, forwardRef, type ForwardedRef, type MutableRefObject } from 'react';
import { AppState, Platform, StyleSheet } from 'react-native';

import { Box } from '../Box';

type Props = {
  delay?: number;
  dontRestartStateChangedToActive?: boolean;
} & BaseLottieProps;

const Lottie = forwardRef(
  (
    { delay = 0, autoPlay = true, dontRestartStateChangedToActive = false, style, ...props }: Props,
    ref: ForwardedRef<BaseLottie>,
  ) => {
    const [isDelaying, setDelaying] = useState(true);
    useEffect(() => {
      if (delay > 0) {
        setDelaying(true);
        const t = setTimeout(() => setDelaying(false), delay);
        return () => clearTimeout(t);
      }
    }, [delay]);
    useEffect(() => {
      if (autoPlay) {
        const subscription = AppState.addEventListener('change', (state) => {
          if (
            state === 'active' &&
            !dontRestartStateChangedToActive &&
            is.object(ref) &&
            (ref as MutableRefObject<BaseLottie>).current
          ) {
            (ref as MutableRefObject<BaseLottie>).current?.play();
          }
        });
        return subscription.remove;
      }
    }, [autoPlay, dontRestartStateChangedToActive, ref]);
    if (delay > 0 && isDelaying) {
      return null;
    }
    if (!props.source) {
      return null;
    }

    return Platform.OS === 'web' ? (
      <Box style={style}>
        <BaseLottie ref={ref} style={StyleSheet.absoluteFillObject} {...props} autoPlay={autoPlay} />
      </Box>
    ) : (
      <BaseLottie ref={ref} style={style} {...props} autoPlay={autoPlay} />
    );
  },
);

export { Lottie };
