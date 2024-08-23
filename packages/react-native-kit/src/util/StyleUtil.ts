import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';

import { is } from '..';

export function flatStyle<S extends ViewStyle | ImageStyle | TextStyle>(style?: StyleProp<S>): S {
  return (StyleSheet.flatten(style) || {}) as S;
}

interface NormalizedLayout {
  marginTop: number;
  marginLeft: number;
  marginRight: number;
  marginBottom: number;
  marginVertical: number;
  marginHorizontal: number;
  paddingTop: number;
  paddingLeft: number;
  paddingRight: number;
  paddingBottom: number;
  paddingVertical: number;
  paddingHorizontal: number;
}
// Get normalized margin, padding number.
// If style prop contains these value with other type instead of number(string, etc...) then it will be ignored and will be retunned 0.
export function normalizeStyleLayout<S extends ViewStyle | ImageStyle | TextStyle>(
  style?: StyleProp<S>,
): NormalizedLayout {
  const flatten = flatStyle(style);

  const marginLeft = parse(flatten.marginLeft, flatten.marginHorizontal, flatten.margin);
  const marginRight = parse(flatten.marginRight, flatten.marginHorizontal, flatten.margin);
  const marginHorizontal = marginLeft === marginRight ? marginLeft : 0;
  const marginTop = parse(flatten.marginTop, flatten.marginVertical, flatten.margin);
  const marginBottom = parse(flatten.marginBottom, flatten.marginVertical, flatten.margin);
  const marginVertical = marginTop === marginBottom ? marginTop : 0;

  const paddingLeft = parse(flatten.paddingLeft, flatten.paddingHorizontal, flatten.padding);
  const paddingRight = parse(flatten.paddingRight, flatten.paddingHorizontal, flatten.padding);
  const paddingHorizontal = paddingLeft === paddingRight ? paddingLeft : 0;
  const paddingTop = parse(flatten.paddingTop, flatten.paddingVertical, flatten.padding);
  const paddingBottom = parse(flatten.paddingBottom, flatten.paddingVertical, flatten.padding);
  const paddingVertical = paddingTop === paddingBottom ? paddingTop : 0;

  return {
    marginBottom,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginTop,
    marginVertical,
    paddingBottom,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingVertical,
  };

  function parse(a, b, c): number {
    return num(a) || num(b) || num(c) || 0;
  }

  function num(x) {
    return is.number(x) ? x : undefined;
  }
}
