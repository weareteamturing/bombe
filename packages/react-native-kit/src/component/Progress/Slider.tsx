import { useCallback, useEffect, useState } from 'react';
import type { StyleProp, ViewStyle, ColorValue } from 'react-native';
import { View } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Svg, Ellipse } from 'react-native-svg';

import { palette } from '../../theme';

const trackScaleInIdle = 0.8;
export type SliderProps = {
  maximumValue: number;
  value: number;
  onSliding: (value: number) => void;
  onSlidingStart?: () => void;
  onSlidingComplete?: (value: number) => void;
  trackHeight?: number;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;

  trackColor?: string;
  progressColor?: string;
  disablePressScaleAnimation?: boolean;
  thumb?: {
    width: number;
    height: number;
    color: ColorValue;
  };

  isSnapToIntegerValue?: boolean;
};
const Slider = (props: SliderProps) => {
  const {
    maximumValue,
    onSlidingComplete = () => {},
    onSlidingStart = () => {},
    onSliding,
    style,
    containerStyle,
    value,
    trackHeight = 10,
    trackColor = palette.violet50,
    progressColor = palette.violet500,
    disablePressScaleAnimation = false,
    thumb,
    isSnapToIntegerValue = false,
  } = props;

  const [isSliding, setSliding] = useState(false);

  const [containerWidth, setContainerWidth] = useState(0);

  const containerScale = useSharedValue(trackScaleInIdle);
  const containerScaleStyle = useAnimatedStyle(() => ({
    transform: [{ scaleY: containerScale.value }],
  }));

  const mapValueToPixel = useCallback(
    (value: number): number => {
      'worklet';
      const scale = containerWidth / (maximumValue || 0.001);
      return value * scale;
    },
    [maximumValue, containerWidth],
  );
  const mapPixelToValue = (pixel: number): number => {
    'worklet';
    const scale = containerWidth / (maximumValue || 0.001);
    return pixel / scale;
  };

  const progressPixelAnimValue = useSharedValue<number>(0);
  useEffect(() => {
    if (!isSliding) {
      progressPixelAnimValue.value = mapValueToPixel(value);
    }
  }, [value, progressPixelAnimValue, mapValueToPixel, isSliding]);

  const thumbWidth = thumb?.width || 0;
  const thumbStyle = useAnimatedStyle(() => {
    return { left: progressPixelAnimValue.value - thumbWidth / 2 };
  });

  const progressAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: progressPixelAnimValue.value,
    };
  });

  const startValue = useSharedValue(0);
  const gesture = Gesture.Pan()
    .hitSlop(16)
    .onStart(() => {
      containerScale.value = withTiming(1);
      startValue.value = progressPixelAnimValue.value;
      runOnJS(onSlidingStart)();
      runOnJS(setSliding)(true);
    })
    .onUpdate(({ translationX }) => {
      const nextPixel = Math.min(containerWidth, Math.max(0, translationX + startValue.value));
      if (isSnapToIntegerValue) {
        const nextValue = Math.round(mapPixelToValue(nextPixel));
        progressPixelAnimValue.value = mapValueToPixel(nextValue);
        runOnJS(onSliding)(nextValue);
      } else {
        progressPixelAnimValue.value = nextPixel;
        runOnJS(onSliding)(mapPixelToValue(nextPixel));
      }
    })
    .onEnd(() => {
      containerScale.value = withTiming(0.8);
      runOnJS(onSlidingComplete)(mapPixelToValue(progressPixelAnimValue.value));
      runOnJS(setSliding)(false);
    });

  return (
    <View style={[{ minHeight: Math.max(thumb?.height || 0, trackHeight) }, containerStyle]}>
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <GestureDetector gesture={gesture}>
          {/* insert dummy view for hit slop correctly working in android */}
          <View hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}>
            <Animated.View
              onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
              style={[
                { height: trackHeight, backgroundColor: trackColor, overflow: 'hidden', borderRadius: 999 },
                style,
                disablePressScaleAnimation ? {} : containerScaleStyle,
              ]}
            >
              <Animated.View style={[{ backgroundColor: progressColor, height: '100%' }, progressAnimatedStyle]} />
            </Animated.View>
          </View>
        </GestureDetector>
      </View>
      {thumb ? (
        <Animated.View
          style={[{ width: thumb.width, height: thumb.height, position: 'absolute' }, thumbStyle]}
          pointerEvents={'none'}
        >
          <Svg
            style={[
              {
                width: thumb.width,
                height: thumb.height,
                overflow: 'visible',
              },
            ]}
            viewBox={`0 0 ${thumb.width} ${thumb.height}`}
            pointerEvents={'none'}
          >
            <Ellipse
              cx={thumb.width / 2}
              cy={thumb.height / 2}
              rx={thumb.width / 2 - 1}
              ry={thumb.height / 2 - 1}
              fill={thumb.color}
              stroke={palette.gray300}
              strokeWidth={1}
            />
          </Svg>
        </Animated.View>
      ) : null}
    </View>
  );
};

export { Slider };
