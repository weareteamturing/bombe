/**
 * 한글로 구성된 글자인지 판별합니다.
 */
export function isKorean(value: string): boolean {
  return /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"0-9]*[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]+[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"0-9]*/.test(
    value,
  );
}
