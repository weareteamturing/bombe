import MaskedView from '@react-native-masked-view/masked-view';
import type { PropsWithChildren } from 'react';
import type { ViewProps } from 'react-native';
import { View, StyleSheet } from 'react-native';

import { gradient as Gradient, type GradientProps, GradientCollection } from '@teamturing/react-native-kit';

type Props = PropsWithChildren<
  {
    borderWidth?: number;
    borderRadius?: number;
    gradient?: GradientProps;
    borderType?: 'outer' | 'stroke' | 'inner';
  } & ViewProps
>;
const GradientBorderContainer = ({
  borderWidth = 1,
  borderRadius = 0,
  gradient = Gradient.gradient4,
  children,
  borderType = 'stroke',
  style,
  ...props
}: Props) => {
  const padding = borderType === 'stroke' ? -borderWidth / 2 : borderType === 'inner' ? 0 : -borderWidth;
  return (
    <View key={1} style={[style, { borderWidth: 0 }]} {...props}>
      {children}
      <View style={StyleSheet.absoluteFill} pointerEvents={'none'}>
        <MaskedView
          pointerEvents={'none'}
          style={{
            position: 'absolute',
            top: padding,
            bottom: padding,
            left: padding,
            right: padding,
          }}
          maskElement={
            <View
              pointerEvents={'none'}
              accessibilityElementsHidden
              importantForAccessibility={'no'}
              style={[StyleSheet.absoluteFill, { borderRadius, borderWidth }]}
            />
          }
        >
          <GradientCollection {...gradient} style={StyleSheet.absoluteFill} />
        </MaskedView>
      </View>
    </View>
  );
};

export { GradientBorderContainer };
export type { Props as GradientBorderContainerProps };
