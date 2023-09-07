import rounding from '../../foundation/rounding';

const radii = {
  none: rounding.rounding0,
  xxs: rounding.rounding4,
  xs: rounding.rounding8,
  s: rounding.rounding12,
  m: rounding.rounding16,
  l: rounding.rounding20,
  xl: rounding.rounding24,
  xxl: rounding.rounding32,
  full: rounding.rounding9999,
} as const;

export type RadiiKey = keyof typeof radii;
export default radii;
