import React, { useRef, useEffect } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Animated, Easing } from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
  opacityOut?: number;
  durationIn?: number;
  durationOut?: number;
  delay?: number;
  iterations?: number;
};

const FadeInOutLoop = ({
  style,
  children,
  durationIn = 500,
  durationOut = 500,
  opacityOut = 0,
  delay = 0,
  iterations = 1,
}: React.PropsWithChildren<Props>) => {
  const opacityValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const easing = Easing.inOut(Easing.cubic);
    const anim = Animated.loop(
      Animated.sequence([
        Animated.loop(
          Animated.sequence([
            Animated.timing(opacityValue, {
              useNativeDriver: true,
              toValue: opacityOut,
              duration: durationIn,
              easing,
            }),
            Animated.timing(opacityValue, { useNativeDriver: true, toValue: 1, duration: durationOut, easing }),
          ]),
          { iterations },
        ),
        Animated.delay(delay),
      ]),
    );

    anim.start();

    return () => {
      anim.stop();
    };
  }, [opacityValue, durationIn, durationOut, opacityOut, delay, iterations]);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: opacityValue,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export { FadeInOutLoop };
