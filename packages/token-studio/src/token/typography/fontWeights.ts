import { fontWeight } from '../../foundation/typography';

const fontWeights = {
  regular: fontWeight.fontWeight400,
  medium: fontWeight.fontWeight500,
  bold: fontWeight.fontWeight700,
} as const;

export type FontWeightKey = keyof typeof fontWeights;
export default fontWeights;
