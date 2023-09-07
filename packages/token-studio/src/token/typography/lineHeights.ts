import { lineHeight } from '../../foundation/typography';

const lineHeights = { 1: lineHeight.lineHeight1, 2: lineHeight.lineHeight2 } as const;

export type LineHeightKey = keyof typeof lineHeights;
export default lineHeights;
