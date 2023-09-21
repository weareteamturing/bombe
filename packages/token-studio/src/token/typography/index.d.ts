import fontSizes, { FontSizeKey } from './fontSizes';
import fontWeights, { FontWeightKey } from './fontWeights';
import lineHeights, { LineHeightKey } from './lineHeights';
declare const typography: {
    readonly display1: {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly display2: {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly display3: {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly display4: {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly 'xxl/regular': {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly xxl: {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly 'xxl/bold': {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly 'xl/regular': {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly xl: {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly 'xl/bold': {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly 'l/regular': {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly l: {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly 'l/bold': {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly 'm/regular': {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly m: {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly 'm/bold': {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly 's/regular': {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly s: {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly 's/bold': {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly 'xs/regular': {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly xs: {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly 'xs/bold': {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly 'xxs/regular': {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly xxs: {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
    readonly 'xxs/bold': {
        readonly fontSize: number;
        readonly fontWeight: number;
        readonly lineHeight: number;
    };
};
type TypographyKey = keyof typeof typography;
export default typography;
export { fontSizes, fontWeights, lineHeights };
export type { TypographyKey, FontSizeKey, FontWeightKey, LineHeightKey };
