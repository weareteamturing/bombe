import { useEffect, useRef } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Animated, TouchableOpacity } from 'react-native';

import { palette } from '../theme';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

type SwitchProps = {
  testID?: string;
  value: boolean;
  onValueChanged?: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};
const Switch = ({ value, onValueChanged, style, testID, disabled }: SwitchProps) => {
  const animValue = useRef(new Animated.Value(value ? 1 : 0)).current;
  useEffect(() => {
    Animated.spring(animValue, { useNativeDriver: false, toValue: value ? 1 : 0 }).start();

    return () => {
      animValue.stopAnimation();
    };
  }, [value, animValue]);

  const cursorTranslationX = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  });
  const backgroundColor = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [palette.gray200, palette.violet500],
  });

  const { containerWidth, containerHeight, containerRadius, thumbRadius } = {
    containerWidth: 51,
    containerHeight: 31,
    containerRadius: 9999,
    thumbRadius: 27 / 2,
  };

  return (
    <AnimatedTouchableOpacity
      {...{ disabled, testID }}
      accessibilityLabel={`switch ${value ? 'on' : 'off'}`}
      onPress={() => onValueChanged?.(!value)}
      activeOpacity={0.8}
      style={[
        {
          width: containerWidth,
          height: containerHeight,
          backgroundColor,
          borderRadius: containerRadius,
          justifyContent: 'center',
        },
        disabled && value
          ? { backgroundColor: palette.violet100 }
          : disabled && !value
          ? { backgroundColor: palette.gray100 }
          : null,
        style,
      ]}
      hitSlop={{
        left: 12,
        top: 12,
        bottom: 12,
        right: 12,
      }}
    >
      <Animated.View
        pointerEvents={'none'}
        style={[
          {
            width: thumbRadius * 2,
            height: thumbRadius * 2,
            backgroundColor: palette.white,
            borderRadius: thumbRadius,
          },
          { transform: [{ translateX: cursorTranslationX }] },
        ]}
      />
    </AnimatedTouchableOpacity>
  );
};

export { Switch };
export type { SwitchProps };
