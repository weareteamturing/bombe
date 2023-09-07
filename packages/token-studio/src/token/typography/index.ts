import fontSizes, { FontSizeKey } from './fontSizes';
import fontWeights, { FontWeightKey } from './fontWeights';
import lineHeights, { LineHeightKey } from './lineHeights';

const typography = {
  'display1': { fontSize: fontSizes.display1, fontWeight: fontWeights.bold, lineHeight: lineHeights[1] },
  'display2': { fontSize: fontSizes.display2, fontWeight: fontWeights.bold, lineHeight: lineHeights[1] },
  'display3': { fontSize: fontSizes.display3, fontWeight: fontWeights.bold, lineHeight: lineHeights[1] },
  'display4': { fontSize: fontSizes.display4, fontWeight: fontWeights.bold, lineHeight: lineHeights[2] },
  'xxl/regular': { fontSize: fontSizes.xxl, fontWeight: fontWeights.regular, lineHeight: lineHeights[2] },
  'xxl': { fontSize: fontSizes.xxl, fontWeight: fontWeights.medium, lineHeight: lineHeights[2] },
  'xxl/bold': { fontSize: fontSizes.xxl, fontWeight: fontWeights.bold, lineHeight: lineHeights[2] },
  'xl/regular': { fontSize: fontSizes.xl, fontWeight: fontWeights.regular, lineHeight: lineHeights[2] },
  'xl': { fontSize: fontSizes.xl, fontWeight: fontWeights.medium, lineHeight: lineHeights[2] },
  'xl/bold': { fontSize: fontSizes.xl, fontWeight: fontWeights.bold, lineHeight: lineHeights[2] },
  'l/regular': { fontSize: fontSizes.l, fontWeight: fontWeights.regular, lineHeight: lineHeights[2] },
  'l': { fontSize: fontSizes.l, fontWeight: fontWeights.medium, lineHeight: lineHeights[2] },
  'l/bold': { fontSize: fontSizes.l, fontWeight: fontWeights.bold, lineHeight: lineHeights[2] },
  'm/regular': { fontSize: fontSizes.m, fontWeight: fontWeights.regular, lineHeight: lineHeights[2] },
  'm': { fontSize: fontSizes.m, fontWeight: fontWeights.medium, lineHeight: lineHeights[2] },
  'm/bold': { fontSize: fontSizes.m, fontWeight: fontWeights.bold, lineHeight: lineHeights[2] },
  's/regular': { fontSize: fontSizes.s, fontWeight: fontWeights.regular, lineHeight: lineHeights[2] },
  's': { fontSize: fontSizes.s, fontWeight: fontWeights.medium, lineHeight: lineHeights[2] },
  's/bold': { fontSize: fontSizes.s, fontWeight: fontWeights.bold, lineHeight: lineHeights[2] },
  'xs/regular': { fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights[2] },
  'xs': { fontSize: fontSizes.xs, fontWeight: fontWeights.medium, lineHeight: lineHeights[2] },
  'xs/bold': { fontSize: fontSizes.xs, fontWeight: fontWeights.bold, lineHeight: lineHeights[2] },
  'xxs/regular': { fontSize: fontSizes.xxs, fontWeight: fontWeights.regular, lineHeight: lineHeights[2] },
  'xxs': { fontSize: fontSizes.xxs, fontWeight: fontWeights.medium, lineHeight: lineHeights[2] },
  'xxs/bold': { fontSize: fontSizes.xxs, fontWeight: fontWeights.bold, lineHeight: lineHeights[2] },
} as const;

type TypographyKey = keyof typeof typography;

export default typography;
export { fontSizes, fontWeights, lineHeights };
export type { TypographyKey, FontSizeKey, FontWeightKey, LineHeightKey };
