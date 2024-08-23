import React, { useRef, useEffect } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Animated, Easing } from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
  scaleX?: number;
  scaleY?: number;

  durationIn?: number;
  durationOut?: number;
  translateYOffset?: number;
};

const Pulse = ({
  style,
  children,
  scaleX = 1.1,
  scaleY = 1.1,
  durationIn = 500,
  durationOut = 500,
  translateYOffset = 0,
}: React.PropsWithChildren<Props>) => {
  const scaleXValue = useRef(new Animated.Value(1)).current;
  const scaleYValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const easing = Easing.inOut(Easing.cubic);
    const xAnim = Animated.sequence([
      Animated.timing(scaleXValue, {
        useNativeDriver: true,
        toValue: scaleX,
        duration: durationIn,
        easing,
      }),
      Animated.timing(scaleXValue, { useNativeDriver: true, toValue: 1, duration: durationOut, easing }),
    ]);
    const yAnim = Animated.sequence([
      Animated.timing(scaleYValue, {
        useNativeDriver: true,
        toValue: scaleY,
        duration: durationIn,
        easing,
      }),
      Animated.timing(scaleYValue, { useNativeDriver: true, toValue: 1, duration: durationOut, easing }),
    ]);

    const anim = Animated.loop(Animated.parallel([xAnim, yAnim]), { resetBeforeIteration: true });

    anim.start();

    return () => {
      anim.stop();
    };
  }, [scaleXValue, scaleYValue, scaleX, scaleY, durationIn, durationOut]);

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [
            { translateY: translateYOffset },
            { scaleX: scaleXValue },
            { scaleY: scaleYValue },
            { translateY: -translateYOffset },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export { Pulse };
