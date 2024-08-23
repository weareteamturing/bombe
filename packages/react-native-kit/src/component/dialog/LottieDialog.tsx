import type LottieView from 'lottie-react-native';
import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Animated, StyleSheet } from 'react-native';

import { Lottie, useDialogContext, useAppState, useStableCallback } from '@teamturing/react-native-kit';

export type LottieDialogShowParams = {
  source: any;
  lottieStyle?: StyleProp<ViewStyle>;
  onAnimationFinish?: () => void;
  speed?: number;
};
export type LottieDialogRef = {
  show: (param: LottieDialogShowParams) => void;
};
const LottieDialog = React.forwardRef((_, ref: React.Ref<LottieDialogRef>) => {
  const lottie = useRef<LottieView>(null);

  const [params, setParams] = useState<LottieDialogShowParams>();

  const [showKey, setShowKey] = useState(0);
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, { useNativeDriver: true, toValue: showKey !== -1 ? 1 : 0, duration: 300 }).start();

    return () => {
      opacity.stopAnimation();
    };
  }, [showKey, opacity]);

  const show = useCallback((params: LottieDialogShowParams) => {
    setParams(params);
    setShowKey((k) => k + 1);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      show,
    }),
    [show],
  );

  const onAnimationFinish = useStableCallback(() => {
    params?.onAnimationFinish?.();
    setShowKey(-1);
    setParams(undefined);
  });

  const appState = useAppState();
  useEffect(() => {
    if (appState !== 'active') {
      onAnimationFinish();
    }
  }, [appState, onAnimationFinish]);

  return (
    <Animated.View
      testID={'lottie_container'}
      style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center', zIndex: 2 }, { opacity }]}
      pointerEvents={'none'}
    >
      <Lottie
        key={showKey}
        ref={lottie}
        testID={'lottie_view'}
        style={[params?.lottieStyle]}
        source={params?.source}
        autoPlay={true}
        resizeMode={'contain'}
        loop={false}
        speed={params?.speed || 1}
        onAnimationFinish={onAnimationFinish}
      />
    </Animated.View>
  );
});

export const LottieDialogComposer = () => {
  const { lottieDialog } = useDialogContext();
  return <LottieDialog ref={lottieDialog} />;
};

export { LottieDialog };
