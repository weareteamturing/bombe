import { useCallback, useMemo, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { WindowSizeClass, decideWindowWidthSizeClass, decideWindowHeightSizeClass } from './WindowSizeClass';
import { useDynamicDimensions } from './useDynamicDimensions';

import { createCtx, useStableCallback } from '@teamturing/react-native-kit';

export const [useDynamicLayout, LayoutProvider] = createCtx(
  (
    { useSafeAreaInsetsHook = useSafeAreaInsets }: { useSafeAreaInsetsHook?: typeof useSafeAreaInsets },
    transformChildren,
  ) => {
    const [windowWidth, setWindowWidth] = useState(Math.ceil(Dimensions.get('window').width));
    const [windowHeight, setWindowHeight] = useState(Math.ceil(Dimensions.get('window').height));
    const windowShortLen = Math.min(windowWidth, windowHeight);
    const windowLongLen = Math.max(windowWidth, windowHeight);
    const _insets: { top: number; bottom: number; left: number; right: number } = useSafeAreaInsetsHook();
    const insets = {
      top: Math.ceil(_insets.top),
      bottom: Math.ceil(_insets.bottom),
      left: Math.ceil(_insets.left),
      right: Math.ceil(_insets.right),
    } as const;

    const windowWidthSizeClass: WindowSizeClass = useMemo(() => decideWindowWidthSizeClass(windowWidth), [windowWidth]);
    const windowHeightSizeClass: WindowSizeClass = useMemo(
      () => decideWindowHeightSizeClass(windowHeight),
      [windowHeight],
    );
    const isWindowWidthSizeClassAtLeast = useCallback(
      (sizeClass: WindowSizeClass) => windowWidthSizeClass >= sizeClass,
      [windowWidthSizeClass],
    );
    const isWindowHeightSizeClassAtLeast = useCallback(
      (sizeClass: WindowSizeClass) => windowHeightSizeClass >= sizeClass,
      [windowHeightSizeClass],
    );

    const isWidthAtLeastMedium = isWindowWidthSizeClassAtLeast(WindowSizeClass.MEDIUM);
    const isWidthAtLeastExpanded = isWindowWidthSizeClassAtLeast(WindowSizeClass.EXPANDED);

    const isHeightAtLeastMedium = isWindowHeightSizeClassAtLeast(WindowSizeClass.MEDIUM);
    const isHeightAtLeastExpanded = isWindowHeightSizeClassAtLeast(WindowSizeClass.EXPANDED);

    const dimensions = useDynamicDimensions({
      screenShortLen: windowShortLen,
      safeAreaBottom: insets.bottom,
      screenWidth: windowWidth,
      windowWidthSizeClass,
      windowHeightSizeClass,
    });

    const updateScreenSizesBeforeRotation = useCallback(
      (orientation: 'portrait' | 'landscape') => {
        if (orientation === 'portrait') {
          setWindowWidth(windowShortLen);
          setWindowHeight(windowLongLen);
        } else if (orientation === 'landscape') {
          setWindowWidth(windowLongLen);
          setWindowHeight(windowShortLen);
        }
      },
      [windowLongLen, windowShortLen],
    );

    const localImageDimensionProps = useStableCallback(
      (
        imageWidth: number,
        imageHeight: number,
        { containerWidth }: { containerWidth: 'full-width' | 'padding-width' | number } = {
          containerWidth: 'padding-width',
        },
      ) => {
        if (containerWidth === 'full-width') {
          const w = Math.min(windowWidth, imageWidth);
          return {
            width: w,
            height: (w * imageHeight) / imageWidth,
          };
        } else if (containerWidth === 'padding-width') {
          const w = Math.min(windowWidth - 2 * dimensions.sidePadding, imageWidth);
          return {
            width: w,
            height: (w * imageHeight) / imageWidth,
          };
        } else {
          const w = Math.min(containerWidth, imageWidth);
          return {
            width: w,
            height: (w * imageHeight) / imageWidth,
          };
        }
      },
    );

    transformChildren((children) => (
      <View
        testID={'LayoutProvider'}
        style={StyleSheet.absoluteFill}
        onLayout={({
          nativeEvent: {
            layout: { width, height },
          },
        }) => {
          setWindowWidth(Math.ceil(width));
          setWindowHeight(Math.ceil(height));
        }}
      >
        {children}
      </View>
    ));

    return {
      ...dimensions,
      screenHeight: windowHeight,
      screenWidth: windowWidth,
      screenWidthWithPadding: windowWidth - 2 * dimensions.sidePadding,
      screenShortLen: windowShortLen,
      screenLongLen: windowLongLen,
      updateScreenSizesBeforeRotation,
      safeAreaInsets: insets,
      sfTop: insets.top,
      sfLeft: insets.left,
      sfRight: insets.right,
      sfBottom: insets.bottom,
      windowWidthSizeClass,
      windowHeightSizeClass,
      isWindowHeightSizeClassAtLeast,
      isWidthAtLeastMedium,
      isWidthAtLeastExpanded,
      isHeightAtLeastMedium,
      isHeightAtLeastExpanded,
      isWindowWidthSizeClassAtLeast,
      localImageDimensionProps,
    };
  },
  'Layout',
);
