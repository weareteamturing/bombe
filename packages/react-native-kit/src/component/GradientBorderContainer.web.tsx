import { View } from 'react-native';

import type { GradientBorderContainerProps } from './GradientBorderContainer';

import { gradient as Gradient } from '@teamturing/react-native-kit';

const GradientBorderContainer = ({
  borderWidth = 1,
  borderRadius = 0,
  gradient = Gradient.gradient4,
  children,
  style,
  ...props
}: GradientBorderContainerProps) => {
  const { colors } = gradient;

  return (
    <View key={1} style={[{ borderWidth, borderRadius, borderColor: colors[0] }, style]} {...props}>
      {children}
    </View>
  );
};

export { GradientBorderContainer };
