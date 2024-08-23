import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import type { PropsWithChildren } from 'react';
import { forwardRef, type ForwardedRef } from 'react';
import type { ScrollViewProps } from 'react-native';
import { ScrollView } from 'react-native';

type StyledScrollViewProps = PropsWithChildren<
  {
    contentContainerSx?: SxProps;
  } & Omit<ScrollViewProps, 'contentContainerStyle'> &
    SxProps
>;
const StyledScrollView = forwardRef((props: StyledScrollViewProps, ref: ForwardedRef<ScrollView>) => {
  const { getStyle, filteredProps } = useSx(props) as any;
  const { getStyle: contentContainerStyle } = useSx(props.contentContainerSx ?? {});
  return <ScrollView ref={ref} {...filteredProps} style={getStyle()} contentContainerStyle={contentContainerStyle()} />;
});

export { StyledScrollView };
export type { StyledScrollViewProps };
