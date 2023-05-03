/**
 * 콤마(,)로 구분되어 있는 숫자를 순수한 숫자로 변환하여 반환합니다.
 */
export function decommaizeNumber(value: string): number {
  return Number(value.replace(/,/g, ''));
}
