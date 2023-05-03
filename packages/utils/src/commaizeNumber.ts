/**
 * 숫자를 콤마(,)로 구분해서 반환합니다.
 */
export function commaizeNumber(value: number): string {
  const parts = value.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return parts.join('.');
}
