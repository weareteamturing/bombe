declare const accentOpacity: {
    readonly accent: number;
};
declare const opacity: {
    readonly accent: number;
};
type AccentOpacityKey = keyof typeof accentOpacity;
type OpacityKey = keyof typeof opacity;
export default opacity;
export { accentOpacity };
export type { AccentOpacityKey, OpacityKey };
