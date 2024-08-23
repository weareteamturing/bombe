import type { TextSxProps } from '@react-native-styled-system/core';
import type { ColorValue, StyleProp, ViewStyle, LayoutChangeEvent } from 'react-native';
import type { NativeSyntheticEvent, TextLayoutEventData } from 'react-native/Libraries/Types/CoreEventTypes';

import { palette } from '../../theme';

import { FontWeight } from './FontWeight';

export type TxtAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';
export type TxtEllipsizeMode = 'head' | 'middle' | 'tail' | 'clip';
export interface TextConfig {
  color: ColorValue;
  numberOfLines: number;
  weight: FontWeight;
  size: number;
  italic?: boolean;
  underline?: boolean;
  strike?: boolean;
  align: TxtAlign;
  style?: StyleProp<ViewStyle>;
  sx?: TextSxProps;
  testID?: string;
  key?: string | number;
  lineHeight?: number;
  onTextLayout?: (event: NativeSyntheticEvent<TextLayoutEventData>) => void;

  touchableStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabledPress?: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;

  ellipsizeMode?: TxtEllipsizeMode;
}
export type TextConfigProp = Partial<TextConfig>;
export const DefaultTxtConfig: TextConfig = {
  color: palette.gray900,
  numberOfLines: 999,
  weight: FontWeight.Regular,
  size: 14,
  align: 'auto',
};
Object.freeze(DefaultTxtConfig);
