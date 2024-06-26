/**
 * @deprecated
 * 한국어 이름인지 판별합니다.
 * 1. 자음, 모음, 공백, 특수문자를 제외한 완전한 한국어의 형태 또는 숫자이며 2-7자의 길이를 가져야합니다.
 */
export function isKoreanName(value: string): boolean {
  return /^[\uac00-\ud7a30-9]{2,7}$/.test(value);
}
