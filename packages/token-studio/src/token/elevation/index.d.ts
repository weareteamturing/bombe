declare const surfaceElevation: {
    readonly surface: "#FFFFFF";
    readonly 'surface/overlay': "#FFFFFF";
};
declare const shadowElevation: {
    readonly 'shadow/overlay': string;
};
declare const elevation: {
    readonly 'shadow/overlay': string;
    readonly surface: "#FFFFFF";
    readonly 'surface/overlay': "#FFFFFF";
};
type SurfaceElevationKey = keyof typeof surfaceElevation;
type ShadowElevationKey = keyof typeof shadowElevation;
type ElevationKey = keyof typeof elevation;
export default elevation;
export { surfaceElevation, shadowElevation };
export type { SurfaceElevationKey, ShadowElevationKey, ElevationKey };
