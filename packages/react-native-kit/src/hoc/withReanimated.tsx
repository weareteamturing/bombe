import React from 'react';
import Animated from 'react-native-reanimated';

export function withReanimated<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  class WithAnimated extends React.Component<P> {
    static displayName = `WithReanimated(${displayName})`;

    override render(): React.ReactNode {
      return <WrappedComponent {...this.props} />;
    }
  }

  return Animated.createAnimatedComponent<P>(WithAnimated);
}
