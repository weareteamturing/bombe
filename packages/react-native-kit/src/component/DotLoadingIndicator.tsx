import { generateArray } from '@mj-studio/js-util';
import { useRef } from 'react';
import type { ColorValue } from 'react-native';
import { Animated, Easing } from 'react-native';

import { RowCenter } from './Layout/Row';

import { type Spacing, palette, useMount } from '@teamturing/react-native-kit';

type Props = {
  size?: number;
  color?: ColorValue;
  gap?: Spacing;
  dotCount?: number;
  duration?: number;
  cycleDurationRatio?: number;
};

const DotLoadingIndicator = ({
  size = 4,
  color = palette.black,
  gap = 2,
  dotCount = 3,
  duration = 1000,
  /// 0 ~ 1
  cycleDurationRatio = 0.5,
}: Props) => {
  const anim = useRef(new Animated.Value(0)).current;
  const styles = generateArray(dotCount).map((i) => {
    const pivot = i * ((1 / dotCount) * cycleDurationRatio);
    return {
      opacity: Animated.add(Animated.modulo(Animated.add(anim, pivot), 1), 0.3),
    };
  });

  useMount(() => {
    Animated.loop(Animated.timing(anim, { toValue: 1, easing: Easing.linear, useNativeDriver: true, duration }), {
      iterations: -1,
      resetBeforeIteration: false,
    }).start();
  });

  return (
    <RowCenter gapX={gap}>
      {generateArray(dotCount).map((i) => (
        <Animated.View
          key={i}
          style={[{ width: size, height: size, borderRadius: 999, backgroundColor: color }, styles[dotCount - 1 - i]]}
        />
      ))}
    </RowCenter>
  );
};

export { DotLoadingIndicator };
