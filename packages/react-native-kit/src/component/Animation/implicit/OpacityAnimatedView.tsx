import type { PropsWithChildren } from 'react';
import { useRef, useEffect, useState } from 'react';
import type { ViewProps } from 'react-native';
import { Animated } from 'react-native';

import { useTimeoutHandlers } from '../../../hook';

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
  const { clearAllTimers, setAutoClearTimeout } = useTimeoutHandlers();
  const [dropChildren, setDropChildren] = useState(!!(dropChildrenWhenInvisible && opacity === 0));
  useEffect(() => {
    clearAllTimers();
    const anim = Animated.timing(opacityValue, { useNativeDriver: true, toValue: opacity, duration });
    anim.start();
    if (opacity <= 0 && dropChildrenWhenInvisible) {
      setAutoClearTimeout(() => setDropChildren(true), duration);
    } else {
      setDropChildren(false);
    }
    return () => {
      clearAllTimers();
      anim.stop();
    };
  }, [opacity, duration, opacityValue, dropChildrenWhenInvisible, clearAllTimers, setAutoClearTimeout]);

  return (
    <Animated.View style={[style, { opacity: opacityValue }]} {...rest}>
      {dropChildren ? null : children}
    </Animated.View>
  );
};

export { OpacityAnimatedView };
