import { useTimeoutHandler } from '@teamturing/react-native-kit';
import type { PropsWithChildren } from 'react';
import { useRef, useEffect, useState } from 'react';
import type { ViewProps } from 'react-native';
import { Animated } from 'react-native';

type Props = { opacity: number; duration?: number; dropChildrenWhenInvisible?: boolean } & ViewProps;
const OpacityAnimatedView = ({
  opacity,
  duration = 300,
  style,
  dropChildrenWhenInvisible = false,
  children,
  ...rest
}: PropsWithChildren<Props>) => {
  const opacityValue = useRef(new Animated.Value(opacity)).current;
  const timeoutHandler = useTimeoutHandler();
  const [dropChildren, setDropChildren] = useState(!!(dropChildrenWhenInvisible && opacity === 0));
  useEffect(() => {
    clearTimeout(timeoutHandler.current);
    const anim = Animated.timing(opacityValue, { useNativeDriver: true, toValue: opacity, duration });
    anim.start();
    if (opacity <= 0 && dropChildrenWhenInvisible) {
      timeoutHandler.current = setTimeout(() => setDropChildren(true), duration);
    } else {
      setDropChildren(false);
    }
    return () => {
      clearTimeout(timeoutHandler.current);
      anim.stop();
    };
  }, [opacity, duration, opacityValue, dropChildrenWhenInvisible, timeoutHandler]);

  return (
    <Animated.View style={[style, { opacity: opacityValue }]} {...rest}>
      {dropChildren ? null : children}
    </Animated.View>
  );
};

export { OpacityAnimatedView };
