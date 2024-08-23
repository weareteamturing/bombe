import type { FlexStyle } from 'react-native';

export type LayoutStyle = Pick<
  FlexStyle,
  | 'flex'
  | 'padding'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingVertical'
  | 'paddingHorizontal'
  | 'position'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginHorizontal'
  | 'marginVertical'
  | 'alignSelf'
>;

export type FlexibleLayoutStyle = LayoutStyle & { flex?: number };
