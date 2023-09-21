declare const fontWeights: {
    readonly regular: number;
    readonly medium: number;
    readonly bold: number;
};
export type FontWeightKey = keyof typeof fontWeights;
export default fontWeights;
