declare const radii: {
    readonly none: number;
    readonly xxs: number;
    readonly xs: number;
    readonly s: number;
    readonly m: number;
    readonly l: number;
    readonly xl: number;
    readonly xxl: number;
    readonly full: number;
};
export type RadiiKey = keyof typeof radii;
export default radii;
