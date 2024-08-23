import { spacing } from '@teamturing/react-native-kit';
import { useMemo } from 'react';

import type { WindowSizeClass } from './WindowSizeClass';
import { createWindowSizeClassIntRecord } from './WindowSizeClass';

export function useDynamicDimensions({
  windowWidthSizeClass,
  screenWidth,
}: {
  windowWidthSizeClass: WindowSizeClass;
  windowHeightSizeClass: WindowSizeClass;
  screenShortLen: number;
  safeAreaBottom: number;
  screenWidth: number;
}) {
  return useMemo(() => {
    const sidePadding = createWindowSizeClassIntRecord({
      compact: spacing[5],
      medium: spacing[20],
      expanded: spacing[32],
    })[windowWidthSizeClass];
    return {
      sidePadding,
      dialogWidth: Math.min(screenWidth * 0.85, 320),
    };
  }, [windowWidthSizeClass, screenWidth]);
}
