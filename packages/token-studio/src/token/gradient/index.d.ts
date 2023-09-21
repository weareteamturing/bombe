declare const textGradient: {
    readonly 'text/accent': string;
};
declare const bgGradient: {
    readonly 'bg/accent/violet': string;
    readonly 'bg/accent/neutral': string;
};
declare const borderGradient: {
    readonly 'border/accent/violet': string;
};
declare const overlayGradient: {
    readonly 'overlay/subtlest/toright': string;
    readonly 'overlay/subtlest/toleft': string;
    readonly 'overlay/subtlest/totop': string;
    readonly 'overlay/floating/toright': string;
    readonly 'overlay/floating/toleft': string;
    readonly 'overlay/floating/totop': string;
    readonly 'overlay/bold/toright': string;
    readonly 'overlay/bold/toleft': string;
    readonly 'overlay/bold/totop': string;
};
declare const gradient: {
    readonly 'overlay/subtlest/toright': string;
    readonly 'overlay/subtlest/toleft': string;
    readonly 'overlay/subtlest/totop': string;
    readonly 'overlay/floating/toright': string;
    readonly 'overlay/floating/toleft': string;
    readonly 'overlay/floating/totop': string;
    readonly 'overlay/bold/toright': string;
    readonly 'overlay/bold/toleft': string;
    readonly 'overlay/bold/totop': string;
    readonly 'border/accent/violet': string;
    readonly 'bg/accent/violet': string;
    readonly 'bg/accent/neutral': string;
    readonly 'text/accent': string;
};
type TextGradientKey = keyof typeof textGradient;
type BgGradientKey = keyof typeof bgGradient;
type BorderGradientKey = keyof typeof borderGradient;
type OverlayGradientKey = keyof typeof overlayGradient;
type GradientKey = keyof typeof gradient;
export default gradient;
export { textGradient, bgGradient, borderGradient, overlayGradient };
export type { TextGradientKey, BgGradientKey, BorderGradientKey, OverlayGradientKey, GradientKey };
