import { isKorean } from './isKorean';

/**
 * 한국어 이름인지 판별합니다.
 * 1. 한글로 구성되어 있으며,
 * 2. 2-7자의 길이를 가져야합니다.
 */
export function isKoreanName(value: string): boolean {
  const isValidLength = 2 <= value.length && value.length < 8;

  return isKorean(value) && isValidLength;
}
