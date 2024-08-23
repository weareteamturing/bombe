import React, { useEffect, useRef, useState } from 'react';
import type { LayoutRectangle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Animated, Easing, ScrollView } from 'react-native';

import { is } from '../util';

import { Txt } from './Txt';

export type MarqueeViewProps = {
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  duration?: number;
  reverse?: boolean;
};

const MarqueeView = ({
  children,
  style,
  contentContainerStyle,
  textStyle,
  duration,
  reverse = false,
}: React.PropsWithChildren<MarqueeViewProps>) => {
  // region ANIM
  const [viewRect, setViewRect] = useState<LayoutRectangle>();
  const [contentRect, setContentRect] = useState<LayoutRectangle>();
  const [widthDiff, setWidthDiff] = useState(0);

  const animValue = useRef(new Animated.Value(0)).current;
  const translateX = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -widthDiff - 12],
  });

  useEffect(() => {
    if (!viewRect || !contentRect) {
      return;
    }

    const viewWidth = viewRect.width;
    const textWidth = contentRect.width;

    animValue.setValue(0);
    setWidthDiff(0);

    if (textWidth > viewWidth) {
      const diff = textWidth - viewWidth;
      setWidthDiff(diff);

      const loop = Animated.loop(
        Animated.sequence([
          Animated.timing(animValue, {
            useNativeDriver: true,
            easing: Easing.linear,
            toValue: 1,
            duration: is.number(duration) ? duration : (viewWidth + diff) * 30,
          }),
          Animated.delay(1000),
          reverse
            ? Animated.timing(animValue, {
                useNativeDriver: true,
                easing: Easing.linear,
                toValue: 0,
                duration: is.number(duration) ? duration : (viewWidth + diff) * 30,
              })
            : Animated.timing(animValue, {
                useNativeDriver: true,
                easing: Easing.linear,
                toValue: 0,
                duration: 0,
              }),
          Animated.delay(1000),
        ]),
      );

      loop.start();

      return () => {
        loop.stop();
      };
    }
  }, [viewRect, contentRect, animValue, duration, reverse]);
  // endregion

  return (
    <ScrollView
      testID={'MarqueeText 스크롤뷰'}
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={contentContainerStyle}
      style={[style, { flexGrow: 0 }]}
      onLayout={(e) => setViewRect(e.nativeEvent.layout)}
    >
      <Animated.View style={[{ transform: [{ translateX }] }]} onLayout={(e) => setContentRect(e.nativeEvent.layout)}>
        {is.string(children)
          ? Txt.XS.Gray900.render(children, { numberOfLines: 1, style: textStyle })
          : React.isValidElement(children)
          ? children
          : null}
      </Animated.View>
    </ScrollView>
  );
};

export { MarqueeView };
