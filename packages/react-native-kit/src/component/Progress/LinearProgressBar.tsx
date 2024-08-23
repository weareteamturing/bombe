import type { SxProps } from '@react-native-styled-system/core';
import { useEffect } from 'react';
import type { ColorValue, StyleProp, ViewStyle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';

import { palette } from '../../theme';
import { is } from '../../util';
import { Box } from '../Box';

export type LinearProgressBarProps = {
  color?: ColorValue;
  backgroundColor?: ColorValue;
  /*0 ~ 1*/
  value: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  animated?: boolean;
  initialAnimatedValue?: number;
  animatedDelay?: number;
  sx?: SxProps;
};
const LinearProgressBar = ({
  color = palette.violet500,
  backgroundColor = palette.gray100,
  style,
  value: _value,
  height = 1,
  animated,
  initialAnimatedValue,
  animatedDelay = 0,
  sx,
}: LinearProgressBarProps) => {
  const value = Math.max(0, Math.min(100, _value));
  const animValue = useSharedValue(is.number(initialAnimatedValue) ? initialAnimatedValue : value);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: `${animValue.value * 100}%`,
    };
  });

  useEffect(() => {
    if (animated) {
      if (is.number(animatedDelay) && animatedDelay > 0) {
        animValue.value = withDelay(animatedDelay, withTiming(value, { duration: 300 }));
      } else {
        animValue.value = withTiming(value, { duration: 300 });
      }
    } else {
      animValue.value = value;
    }
  }, [value, animValue, animated, animatedDelay]);

  return (
    <Box
      style={[style, { backgroundColor: backgroundColor, height, alignItems: 'flex-start', overflow: 'hidden' }]}
      sx={sx}
    >
      <Animated.View style={[{ backgroundColor: color, height }, animatedStyle]} />
    </Box>
  );
};

export { LinearProgressBar };
