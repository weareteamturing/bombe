import { Dimensions } from 'react-native';

import { is } from './is';

const scaleFactor = () => Math.min(2, Dimensions.get('window').scale);
export type ImageCrop = { l: number; r: number; t: number; b: number };
export function appendImageSizeQueryParams({
  url,
  desiredWidth,
  crop,
}: {
  url: string;
  desiredWidth: number;
  crop?: ImageCrop;
}): string {
  if (!is.notEmptyString(url) || !url.startsWith('http')) {
    return url;
  }

  const w = Math.max(128, Math.floor((desiredWidth * scaleFactor() + 128 - 1) / 128) * 128);

  const cropQueryStrings = Object.entries(crop || {}).map(([key, value]) => `${key}=${Math.round(value)}`);

  const queryString = [`w=${w}`, ...cropQueryStrings].join('&');

  if (url.includes('?')) {
    return `${url}&${queryString}`;
  } else {
    return `${url}?${queryString}`;
  }
}
