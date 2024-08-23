import React, { useRef, useEffect } from 'react';
import { type StyleProp, type ViewStyle, type ColorValue, Animated, Easing, View, StyleSheet } from 'react-native';
import { Svg, G, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import type { Linecap } from 'react-native-svg/src/lib/extract/types';

import { palette, gradient } from '../../theme';
import { is } from '../../util';

type Props = {
  size: number;
  childSize: number;
  childComponent?: React.ReactElement;
  value: number;
  maxValue?: number;
  isAnimated?: boolean;
  delay?: number;
  style?: StyleProp<ViewStyle>;
  disableSpacing?: boolean;
  lineCap?: Linecap;
  progressColor?: ColorValue;
  barColor?: ColorValue;
  backgroundColor?: ColorValue;
  useGradient4ForProgressColor?: boolean;
  animatedInitialValue?: number;
};

const CircularProgressIndicator = ({
  size,
  childComponent,
  childSize,
  value: propValue,
  maxValue = 100,
  isAnimated = true,
  delay = 0,
  style,
  disableSpacing = false,
  lineCap,
  progressColor = palette.violet500,
  barColor = palette.gray200,
  backgroundColor,
  useGradient4ForProgressColor = false,
  animatedInitialValue = 0,
}: Props) => {
  const spacingWidth = disableSpacing ? 0 : (size - childSize) / 2 / 3;
  const strokeWidth = (size - childSize - spacingWidth * 2) / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const value = Math.min(propValue, maxValue);

  const initialValueCircumference = circumference * (1 - animatedInitialValue / maxValue);

  const valueCircumference = circumference * (1 - value / maxValue);
  const valueCircleCommonProps = {
    cx: size / 2,
    cy: size / 2,
    r: radius,
    stroke: progressColor,
    strokeWidth: strokeWidth,
    strokeDasharray: circumference,
    fill: 'none',
  };

  const strokeDashoffsetValue = useRef(new Animated.Value(initialValueCircumference)).current;
  useEffect(() => {
    const animation = Animated.timing(strokeDashoffsetValue, {
      useNativeDriver: true,
      toValue: valueCircumference,
      easing: Easing.out(Easing.circle),
      duration: 700,
      delay: delay,
    });
    animation.start();

    return animation.stop;
  }, [circumference, delay, strokeDashoffsetValue, valueCircumference]);

  return (
    <View style={[style, { width: size, height: size }]}>
      <Svg width={size} height={size} {...(is.android() ? { renderToHardwareTextureAndroid: true } : {})}>
        <Defs>
          <LinearGradient id={'gradient4'} x1={1} y1={0} x2={0} y2={1}>
            {gradient.gradient4.colors.map((c, i) => (
              <Stop stopColor={c} offset={i} key={i} />
            ))}
          </LinearGradient>
        </Defs>
        <G origin={[size / 2, size / 2]} rotation={-90}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={(size - strokeWidth) / 2}
            stroke={barColor}
            strokeWidth={strokeWidth}
            fill={'none'}
          />
          {backgroundColor ? <Circle cx={size / 2} cy={size / 2} r={childSize / 2} fill={backgroundColor} /> : null}
          {value === 0 ? null : isAnimated ? (
            <AnimatedCircle
              {...valueCircleCommonProps}
              stroke={useGradient4ForProgressColor ? 'url(#gradient4)' : valueCircleCommonProps.stroke}
              strokeDashoffset={strokeDashoffsetValue}
              strokeLinecap={lineCap}
            />
          ) : (
            <Circle
              {...valueCircleCommonProps}
              stroke={useGradient4ForProgressColor ? 'url(#gradient4)' : valueCircleCommonProps.stroke}
              strokeDashoffset={valueCircumference}
              strokeLinecap={lineCap}
            />
          )}
        </G>
      </Svg>
      <View style={{ ...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: childSize, height: childSize, alignItems: 'center', justifyContent: 'center' }}>
          {childComponent}
        </View>
      </View>
    </View>
  );
};
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export { CircularProgressIndicator };
export type { Props as CircularProgressIndicatorProps };
