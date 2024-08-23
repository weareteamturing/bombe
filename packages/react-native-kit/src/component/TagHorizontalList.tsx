import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import { type TagProps, Tag, useTimeoutHandlers, spacing } from '@teamturing/react-native-kit';
import type { Ref } from 'react';
import { useRef, forwardRef, useImperativeHandle, useCallback } from 'react';
import type { ScrollView } from 'react-native';
import { View } from 'react-native';

import is from '../util/is';

import { useDynamicLayout } from './Layout/Layout/LayoutProvider';
import { RowCenter } from './Layout/Row';
import { StyledScrollView } from './StyledScrollView';

type Props = {
  tags: (TagProps & { key: string | number })[];
  contentContainerSx?: SxProps;
  autoScrollToCenter?: boolean;
} & SxProps;
export type TagHorizontalListRef = {
  scrollTo: (params: { key: string | number }) => void;
};
const _TagHorizontalList = (props: Props, ref: Ref<TagHorizontalListRef>) => {
  const { tags, autoScrollToCenter = true } = props;
  const { getStyle } = useSx(props, { fallback: { flexGrow: 0 } });
  const { screenWidth } = useDynamicLayout();
  const scrollView = useRef<ScrollView>(null);
  const tagCenterXOffset = useRef<Record<string | number, number>>({});

  const scrollToKey = useCallback(({ key }: { key: string | number }) => {
    if (key in tagCenterXOffset.current && is.number(tagCenterXOffset.current[key])) {
      scrollView.current?.scrollTo({ x: tagCenterXOffset.current[key], animated: true });
    }
  }, []);
  const initialScrollKey = useRef<string | number>(-1);
  const { clearTimerAtUnmount, clearAllTimers: clearAllTimers } = useTimeoutHandlers();

  useImperativeHandle(
    ref,
    () => ({
      scrollTo: scrollToKey,
    }),
    [scrollToKey],
  );
  return (
    <StyledScrollView
      ref={scrollView}
      horizontal
      style={getStyle()}
      contentContainerSx={props.contentContainerSx}
      showsHorizontalScrollIndicator={false}
    >
      <RowCenter gapX={2}>
        {tags.map((tag, i) => {
          if (autoScrollToCenter && tag.value && initialScrollKey.current === -1) {
            initialScrollKey.current = tag.key;
            clearTimerAtUnmount(setTimeout(() => scrollToKey({ key: tag.key }), 500));
          }
          return (
            <View
              key={tag.key}
              onLayout={({
                nativeEvent: {
                  layout: { x, width },
                },
              }) => {
                tagCenterXOffset.current[tag.key] = Math.max(0, x - (screenWidth - width) / 2 + spacing[i ? 1 : 0]);
              }}
            >
              <Tag
                variant={'gray-900'}
                size={'m'}
                {...tag}
                onPress={
                  autoScrollToCenter
                    ? () => {
                        clearAllTimers();
                        scrollToKey({ key: tag.key });
                        tag.onPress?.();
                      }
                    : tag.onPress
                }
              />
            </View>
          );
        })}
      </RowCenter>
    </StyledScrollView>
  );
};

export const TagHorizontalList = forwardRef(_TagHorizontalList);
