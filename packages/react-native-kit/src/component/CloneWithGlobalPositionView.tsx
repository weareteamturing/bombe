import React, { useRef } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

import { useTimeoutHandler, is } from '@teamturing/react-native-kit';

type GlobalLayoutParams = { x: number; y: number; width: number; height: number };
type Props = {
  onLayoutGlobal?: (params: GlobalLayoutParams) => void;
  onLayoutGlobalWithClonedChildren?: (params: GlobalLayoutParams & { element: React.ReactElement }) => void;
  measureDelay?: number;
  cloneChildren?: React.ReactElement;
} & Omit<ViewProps, 'onLayout' | 'collapsible'>;
const CloneWithGlobalPositionView = ({
  onLayoutGlobal,
  onLayoutGlobalWithClonedChildren,
  measureDelay = 500,
  children,
  cloneChildren,
  ...rest
}: Props) => {
  const ref = useRef<View>(null);
  const timeoutHandler = useTimeoutHandler();
  return (
    <View
      {...rest}
      collapsable={false}
      ref={ref}
      onLayout={
        !is.function(onLayoutGlobal) && !is.function(onLayoutGlobalWithClonedChildren)
          ? undefined
          : () => {
              timeoutHandler.current = setTimeout(() => {
                ref.current?.measure((_, __, width, height, pageX, pageY) => {
                  onLayoutGlobal?.({ height, width, x: pageX, y: pageY });
                  if (is.function(onLayoutGlobalWithClonedChildren)) {
                    const cloned = cloneChildren || React.cloneElement(<>{children}</>);
                    onLayoutGlobalWithClonedChildren?.({ height, width, x: pageX, y: pageY, element: cloned });
                  }
                });
              }, measureDelay);
            }
      }
    >
      {children}
    </View>
  );
};

export { CloneWithGlobalPositionView };
