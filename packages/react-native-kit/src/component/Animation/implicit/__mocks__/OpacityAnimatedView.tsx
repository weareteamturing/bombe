import type { PropsWithChildren } from 'react';
import { type ViewProps, View } from 'react-native';

type Props = { opacity: number; duration?: number; dropChildrenWhenInvisible?: boolean } & ViewProps;
const OpacityAnimatedView = ({
  opacity,
  style,
  dropChildrenWhenInvisible = false,
  children,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <View style={[style, { opacity }]} {...rest}>
      {dropChildrenWhenInvisible && opacity <= 0 ? null : children}
    </View>
  );
};

export default OpacityAnimatedView;
