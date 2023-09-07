import { fontSize } from '../../foundation/typography';

const fontSizes = {
  xxs: fontSize.fontSize100,
  xs: fontSize.fontSize200,
  s: fontSize.fontSize300,
  m: fontSize.fontSize500,
  l: fontSize.fontSize700,
  xl: fontSize.fontSize800,
  xxl: fontSize.fontSize900,
  display4: fontSize.fontSize1000,
  display3: fontSize.fontSize1100,
  display2: fontSize.fontSize1200,
  display1: fontSize.fontSize1300,
};

export type FontSizeKey = keyof typeof fontSizes;
export default fontSizes;
