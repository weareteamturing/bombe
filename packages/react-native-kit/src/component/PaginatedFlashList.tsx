import { type FlashListProps, FlashList } from '@shopify/flash-list';
import { useStableCallback, is, useScrollViewOnEndReachedConfig } from '@teamturing/react-native-kit';
import { useImperativeHandle, useRef, useState, forwardRef } from 'react';
import type { FlatListProps, ScrollViewProps } from 'react-native';
import { View } from 'react-native';

import { LoadingIndicator } from './LoadingIndicator';

export type PaginatedFlashListProps<T> = Omit<FlashListProps<T>, 'maintainVisibleContentPosition'> & {
  /**
   * Called once when the scroll position gets close to end of list. This must return a promise.
   * You can `onEndReachedThreshold` as distance from end of list, when this function should be called.
   */
  onEndReached: () => Promise<any>;
  /**
   * Called once when the scroll position gets close to begining of list. This must return a promise.
   * You can `onStartReachedThreshold` as distance from beginning of list, when this function should be called.
   */
  onStartReached?: () => Promise<any>;
  /**
   * Enable autoScrollToTop.
   * In chat type applications, you want to auto scroll to bottom, when new message comes it.
   */
  enableAutoscrollToTop?: boolean;
  /**
   * If `enableAutoscrollToTop` is true, the scroll threshold below which auto scrolling should occur.
   */
  autoscrollToTopThreshold?: number;
  /** Custom UI component for header indicator of FlatList. Only used when `showDefaultLoadingIndicators` is false */
  ListHeaderComponent?: FlatListProps<T>['ListHeaderComponent'];
  /** Custom UI component for footer indicator of FlatList. Only used when `showDefaultLoadingIndicators` is false */
  ListFooterComponent?: FlatListProps<T>['ListFooterComponent'];
  showFooterIndicator?: boolean;
  showHeaderIndicator?: boolean;
};

export type PaginatedFlashListRef = {
  scrollToTop: (arg?: { animated: boolean }) => void;
  scrollToOffset: (param: Parameters<FlashList<any>['scrollToOffset']>[0]) => void;
  scrollToIndex: (params: Parameters<FlashList<any>['scrollToIndex']>[0]) => void;
  scrollToItem: (...params: Parameters<FlashList<any>['scrollToItem']>) => void;
  resetTracker: () => void;
};

/**
 * Note:
 * - `onEndReached` and `onStartReached` must return a promise.
 * - `onEndReached` and `onStartReached` only get called once, per content length.
 * - maintainVisibleContentPosition is fixed, and can't be modified through props.
 * - doesn't accept `ListFooterComponent` via prop, since it is occupied by `FooterLoadingIndicator`.
 *    Set `showDefaultLoadingIndicators` to use `ListFooterComponent`.
 * - doesn't accept `ListHeaderComponent` via prop, since it is occupied by `HeaderLoadingIndicator`
 *    Set `showDefaultLoadingIndicators` to use `ListHeaderComponent`.
 */
// eslint-disable-next-line react/display-name
export const PaginatedFlashList = forwardRef<PaginatedFlashListRef, PaginatedFlashListProps<any>>((props, ref) => {
  const {
    data,
    ListHeaderComponent,
    ListFooterComponent,
    onEndReached = () => Promise.resolve(),
    onScroll,
    onStartReached = () => Promise.resolve(),
    showFooterIndicator,
    showHeaderIndicator,
  } = props;
  const listRef = useRef<FlashList<any>>(null);

  const [onStartReachedInProgress, setOnStartReachedInProgress] = useState(false);
  const [onEndReachedInProgress, setOnEndReachedInProgress] = useState(false);

  const onStartReachedTracker = useRef<Record<number, boolean>>({});
  const onEndReachedTracker = useRef<Record<number, boolean>>({});

  const onStartReachedInPromise = useRef<Promise<void> | null>(null);
  const onEndReachedInPromise = useRef<Promise<void> | null>(null);

  const maybeCallOnStartReached = () => {
    // If onStartReached has already been called for given data length, then ignore.
    if (data?.length && onStartReachedTracker.current[data.length]) {
      return;
    }

    const setIsStarted = () => {
      if (data?.length) {
        onStartReachedTracker.current[data.length] = true;
      }
      setOnStartReachedInProgress(true);
    };

    const p = () => {
      return new Promise<void>((resolve) => {
        onStartReachedInPromise.current = null;
        setOnStartReachedInProgress(false);
        resolve();
      });
    };

    if (onEndReachedInPromise.current) {
      onEndReachedInPromise.current.finally(() => {
        setIsStarted();
        onStartReachedInPromise.current = onStartReached().then(p);
      });
    } else if (!onStartReachedInPromise.current) {
      setIsStarted();
      onStartReachedInPromise.current = onStartReached().then(p);
    }
  };

  const maybeCallOnEndReached = () => {
    // If onEndReached has already been called for given data length, then ignore.
    if (data?.length && onEndReachedTracker.current[data.length]) {
      return;
    }

    const setIsStarted = () => {
      if (data?.length) {
        onEndReachedTracker.current[data.length] = true;
      }
      setOnEndReachedInProgress(true);
    };

    const p = () => {
      return new Promise<void>((resolve) => {
        onEndReachedInPromise.current = null;
        setOnEndReachedInProgress(false);
        resolve();
      });
    };

    if (onStartReachedInPromise.current) {
      onStartReachedInPromise.current.finally(() => {
        setIsStarted();
        onEndReachedInPromise.current = (onEndReached() as unknown as Promise<void>).then(p);
      });
    } else if (!onEndReachedInPromise.current) {
      setIsStarted();
      onEndReachedInPromise.current = (onEndReached() as unknown as Promise<void>).then(p);
    }
  };
  const isFirstScrollEvent = useRef(true);
  const handleScroll: ScrollViewProps['onScroll'] = useStableCallback((event) => {
    if (isFirstScrollEvent.current) {
      // adjust initial scroll offset in MVCP mode
      isFirstScrollEvent.current = false;
      return;
    }
    // Call the parent onScroll handler, if provided.
    onScroll?.(event);

    const offset = event.nativeEvent.contentOffset.y;

    // Check if scroll has reached either start of end of list.
    const isScrollAtStart = offset < 30;

    if (isScrollAtStart) {
      maybeCallOnStartReached();
    }
  });

  const renderHeaderLoadingIndicator = useStableCallback(() => {
    return (
      <View>
        <>
          {ListHeaderComponent ? ListHeaderComponent : null}
          {!onStartReachedInProgress || (is.boolean(showHeaderIndicator) && !showHeaderIndicator) ? null : (
            <LoadingIndicator style={{ height: 50 }} />
          )}
        </>
      </View>
    );
  });

  const renderFooterLoadingIndicator = useStableCallback(() => {
    return (
      <View>
        <>
          {!onEndReachedInProgress || (is.boolean(showFooterIndicator) && !showFooterIndicator) ? null : (
            <LoadingIndicator style={{ height: 40 }} />
          )}
          {ListFooterComponent ? ListFooterComponent : null}
        </>
      </View>
    );
  });

  useImperativeHandle(
    ref,
    () => ({
      scrollToTop: (arg?: { animated: boolean }) => {
        listRef.current?.scrollToOffset({ animated: arg?.animated || false, offset: 0 });
      },
      scrollToOffset: (params) => {
        listRef.current?.scrollToOffset(params);
      },
      resetTracker: () => {
        onStartReachedTracker.current = {};
        onEndReachedTracker.current = {};
      },
      scrollToIndex: (params) => listRef.current?.scrollToIndex(params),
      scrollToItem: (...params) => listRef.current?.scrollToItem(...params),
    }),
    [],
  );

  const OnEndReached = useScrollViewOnEndReachedConfig({
    disabled: onEndReachedInProgress,
    onEndReached: maybeCallOnEndReached,
  });

  return (
    <FlashList
      {...props}
      ref={listRef as any}
      ListHeaderComponent={renderHeaderLoadingIndicator}
      ListFooterComponent={renderFooterLoadingIndicator}
      onScroll={handleScroll}
      {...OnEndReached}
    />
  );
});
