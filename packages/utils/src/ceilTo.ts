/**
 * 특정 자릿수에서 올림을 해줍니다.
 */
export const ceilTo = (value: number, digit: number) => {
  const unit = 10 ** digit;

  /**
   * floating point 문제를 해결하기 위한 코드입니다.
   */
  if (unit < 1) {
    return Math.ceil(value * (1 / unit)) / (1 / unit);
  }

  return Math.ceil(value / unit) * unit;
};
