import { useRef } from 'react';
import { type NativeScrollEvent, type NativeSyntheticEvent, Platform } from 'react-native';

import { useStableCallback } from './useStableCallback';

export const useScrollViewOnEndReachedConfig = ({
  disabled,
  onEndReached: _onEndReached,
}: {
  disabled?: boolean;
  onEndReached?: () => void;
}): {
  onEndReached: () => void;
  onMomentumScrollBegin: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onEndReachedThreshold: number;
  scrollEventThrottle: number;
} => {
  const isScrollStartedToBottomDirection = useRef(false);
  const lastLoadUnixMs = useRef(0);
  const onEndReached = useStableCallback(async () => {
    if (
      !disabled &&
      (Platform.OS === 'web' ? true : isScrollStartedToBottomDirection.current) &&
      Date.now() - lastLoadUnixMs.current > 500
    ) {
      isScrollStartedToBottomDirection.current = false;
      lastLoadUnixMs.current = Date.now();
      _onEndReached?.();
    }
  });
  const onMomentumScrollBegin = useStableCallback(() => {
    if (!disabled) {
      isScrollStartedToBottomDirection.current = true;
    }
  });
  return {
    onEndReached,
    onMomentumScrollBegin,
    onEndReachedThreshold: Platform.OS === 'web' ? 0.2 : 0.1,
    scrollEventThrottle: 16,
  };
};
