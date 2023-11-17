type CSSPixelValue = number | string;

/**
 * CSS에서 사용할 수 있는 픽셀값으로 강제합니다.
 */
export const forcePixelValue = (value: CSSPixelValue): string => {
  return typeof value === 'string' ? value : `${value}px`;
};
