import type { PropsWithChildren } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  interpolate,
  Extrapolation,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

import { useMount } from '../../../hook';
import { palette } from '../../../theme';
import { px } from '../../../util';
import { Box } from '../../Box';

const ACircle = Animated.createAnimatedComponent(Circle);
export const CircleEffectAnimation = ({ childSize: size = 24, children }: PropsWithChildren<{ childSize: number }>) => {
  const animValue = useSharedValue(0);

  const effectSize = (size * 5) / 3;

  const maxStrokeWidth = size / 6;

  const r1 = size / 12;
  const r2 = size / 5;
  const r3 = size / 8;

  const ringAnimProps = useAnimatedProps(() => {
    const strokeWidth = interpolate(animValue.value, [0, 0.05, 0.6], [maxStrokeWidth, maxStrokeWidth, 1]);
    return {
      r: size / 2 + (maxStrokeWidth / 3) * 2 + (maxStrokeWidth - strokeWidth) / 2,
      strokeWidth,
      opacity: interpolate(animValue.value, [0, 0.05, 0.4, 0.5], [0, 0.25, 0.25, 0], Extrapolation.CLAMP),
    };
  }, []);

  const circle1AnimProps = useAnimatedProps(() => {
    return {
      r: r1 * interpolate(animValue.value, [0, 0.05, 0.3, 1], [0.8, 1, 1, 0.7]),
      opacity: interpolate(animValue.value, [0, 0.1, 0.5, 1], [0, 0.5, 0.5, 0]),
      cx: (effectSize / 2) * (1 - Math.cos(Math.PI / 4 - animValue.value / 6)),
      cy: (effectSize / 2) * (1 + Math.sin(Math.PI / 4 - animValue.value / 8)),
    };
  }, []);

  const circle2AnimProps = useAnimatedProps(() => {
    const r_p = (size + maxStrokeWidth * 2) / 2 + interpolate(animValue.value, [0, 0.05, 0.8, 1], [-r2, -r2, 0]);
    return {
      r: r2 * interpolate(animValue.value, [0, 0.05, 0.3, 1], [0.8, 1, 1, 0.7]),
      opacity: interpolate(animValue.value, [0, 0.1, 0.5, 1], [0, 0.5, 0.5, 0]),
      cx: effectSize / 2 - r_p * Math.cos(Math.PI / 3),
      cy: effectSize / 2 + r_p * Math.sin(Math.PI / 3),
    };
  }, []);

  const circle3AnimProps = useAnimatedProps(() => {
    const r_p = (size + maxStrokeWidth * 2) / 2 + r3 * animValue.value;
    return {
      r: r3 * interpolate(animValue.value, [0, 0.05, 0.3, 1], [0.8, 1, 1, 0.7]),
      opacity: interpolate(animValue.value, [0, 0.1, 0.5, 1], [0, 1, 1, 0]),
      cx: effectSize / 2 + r_p * Math.cos(Math.PI / 3),
      cy: effectSize / 2 - r_p * Math.sin(Math.PI / 3),
    };
  }, []);

  useMount(() => {
    // animValue.value = withRepeat(withDelay(1000, withTiming(1, { duration: 500 })), -1, false);
    animValue.value = withTiming(1, { duration: 500 });
  });

  return (
    <Box width={px(size)} alignSelf={'center'}>
      <Svg
        width={effectSize}
        height={effectSize}
        viewBox={`0 0 ${effectSize} ${effectSize}`}
        style={{
          position: 'absolute',
          top: -(effectSize - size) / 2,
          left: -(effectSize - size) / 2,
        }}
      >
        <ACircle
          cx={effectSize / 2}
          cy={effectSize / 2}
          fill={'transparent'}
          stroke={palette.violet500}
          animatedProps={ringAnimProps}
        />
        <ACircle fill={palette.violet400} animatedProps={circle1AnimProps} />
        <ACircle fill={palette.violet400} animatedProps={circle2AnimProps} />
        <ACircle fill={palette.violet400} animatedProps={circle3AnimProps} />
      </Svg>
      {children}
    </Box>
  );
};
