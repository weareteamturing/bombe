import type { SxProps } from '@react-native-styled-system/core';
import { useStableCallback, Chip } from '@teamturing/react-native-kit';
import type { Ref } from 'react';
import { useState } from 'react';
import type { TCarouselProps as BaseCarouselProps, ICarouselInstance } from 'react-native-reanimated-carousel';
import BaseCarousel from 'react-native-reanimated-carousel';

import { Box } from './Box';
import { type PaginatorProps, Paginator } from './Paginator';

type Props<T> = {
  enablePaginator?: boolean;
  showPageIndexPerMaxPageIndex?: boolean;
  onProgressChange?: (index: number) => void;
  sx?: SxProps;
  paginator?: Partial<PaginatorProps>;
  innerRef?: Ref<ICarouselInstance>;
} & Omit<BaseCarouselProps<T>, 'onProgressChange' | 'style'>;

const Carousel = <T,>({
  enablePaginator = false,
  showPageIndexPerMaxPageIndex = false,
  data,
  sx,
  onProgressChange,
  paginator,
  innerRef,
  ...props
}: Props<T>) => {
  const [pageIndex, setPageIndex] = useState<number>(0);

  const handleProgressChange = useStableCallback((_, indexFloat: number) => {
    let result = Math.round(indexFloat);
    if (result >= data.length) {
      result = 0;
    }
    if (pageIndex !== result) {
      setPageIndex(result);
      onProgressChange?.(result);
    }
  });

  return (
    <Box sx={sx}>
      <BaseCarousel<T> ref={innerRef} data={data} onProgressChange={handleProgressChange} {...(props as any)} />
      {enablePaginator ? (
        <Paginator value={pageIndex} maxValue={data.length} dotSize={10} dotColor={'white'} mt={4} {...paginator} />
      ) : null}
      {showPageIndexPerMaxPageIndex ? (
        <Chip variant={'dim'} size={'l'} text={`${pageIndex + 1}/${data.length}`} mt={4} />
      ) : null}
    </Box>
  );
};

export { Carousel };
export type { Props as CarouselProps };
