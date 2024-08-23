import type { SxProps } from '@react-native-styled-system/core';
import type { ImageStyle, ImageURISource, StyleProp, DimensionValue } from 'react-native';
import type { OnLoadEvent } from 'react-native-fast-image';

export type ImgAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';
export interface ImageConfig {
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
  width?: DimensionValue;
  height?: DimensionValue;
  style?: StyleProp<ImageStyle>;
  sx?: SxProps;

  testID?: string;
  key?: string | number;

  tintColor?: string;
  headers?: ImageURISource['headers'];
  onError?: () => void;
  onLoad?: (event: OnLoadEvent) => void;
  onLoadEnd?: () => void;
  useFastImageInLocalImage?: boolean;
}
export type ImageConfigProp = Partial<ImageConfig>;
export const DefaultImageConfig: ImageConfig = {
  resizeMode: 'contain',
};
Object.freeze(DefaultImageConfig);
