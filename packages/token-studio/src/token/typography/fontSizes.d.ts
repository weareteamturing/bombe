declare const fontSizes: {
    xxs: number;
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
    display4: number;
    display3: number;
    display2: number;
    display1: number;
};
export type FontSizeKey = keyof typeof fontSizes;
export default fontSizes;
