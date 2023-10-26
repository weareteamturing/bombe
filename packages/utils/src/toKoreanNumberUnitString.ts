/**
 * 숫자를 한글 숫자 단위의 string으로 변환해 반환합니다.
 */
export function toKoreanNumberUnitString(n: number): string {
  const isNumber = (candidate: any): candidate is number => typeof candidate === 'number' && !isNaN(candidate);

  if (!isNumber(n)) {
    return '';
  }

  if (n < 1000) {
    return n + '';
  }

  if (n < 10000) {
    const integerPoint = Math.floor(n / 1000);
    const decimalPoint = Math.floor((n % 1000) / 100);
    if (decimalPoint !== 0) {
      return `${integerPoint}.${decimalPoint}천`;
    } else {
      return `${integerPoint}천`;
    }
  }

  const integerPoint = Math.floor(n / 10000);
  const decimalPoint = Math.floor((n % 10000) / 1000);
  if (decimalPoint !== 0) {
    return `${integerPoint}.${decimalPoint}만`;
  } else {
    return `${integerPoint}만`;
  }
}
