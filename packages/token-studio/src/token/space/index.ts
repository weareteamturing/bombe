import spacing from '../../foundation/spacing';

const space = {
  '-80': -spacing.spacing320,
  '-50': -spacing.spacing200,
  '-48': -spacing.spacing192,
  '-40': -spacing.spacing160,
  '-32': -spacing.spacing128,
  '-30': -spacing.spacing120,
  '-28': -spacing.spacing112,
  '-24': -spacing.spacing96,
  '-20': -spacing.spacing80,
  '-18': -spacing.spacing72,
  '-16': -spacing.spacing64,
  '-14': -spacing.spacing56,
  '-12': -spacing.spacing48,
  '-10': -spacing.spacing40,
  '-8': -spacing.spacing32,
  '-7': -spacing.spacing28,
  '-6': -spacing.spacing24,
  '-5': -spacing.spacing20,
  '-4': -spacing.spacing16,
  '-3': -spacing.spacing12,
  '-2': -spacing.spacing8,
  '-1': -spacing.spacing4,
  '-0.5': -spacing.spacing2,
  '-0.25': -spacing.spacing1,
  0: spacing.spacing0,
  0.25: spacing.spacing1,
  0.5: spacing.spacing2,
  1: spacing.spacing4,
  2: spacing.spacing8,
  3: spacing.spacing12,
  4: spacing.spacing16,
  5: spacing.spacing20,
  6: spacing.spacing24,
  7: spacing.spacing28,
  8: spacing.spacing32,
  10: spacing.spacing40,
  12: spacing.spacing48,
  14: spacing.spacing56,
  16: spacing.spacing64,
  18: spacing.spacing72,
  20: spacing.spacing80,
  24: spacing.spacing96,
  28: spacing.spacing112,
  30: spacing.spacing120,
  32: spacing.spacing128,
  40: spacing.spacing160,
  48: spacing.spacing192,
  50: spacing.spacing200,
  80: spacing.spacing320,
} as const;

export type SpaceKey = keyof typeof space;
export default space;