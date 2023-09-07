import palette from '../../foundation/palette';
import shadow from '../../foundation/shadow';

const surfaceElevation = {
  'surface': palette.white,
  'surface/overlay': palette.white,
} as const;

const shadowElevation = {
  'shadow/overlay': shadow.shadowMedium,
} as const;

const elevation = {
  ...surfaceElevation,
  ...shadowElevation,
} as const;

type SurfaceElevationKey = keyof typeof surfaceElevation;
type ShadowElevationKey = keyof typeof shadowElevation;
type ElevationKey = keyof typeof elevation;

export default elevation;
export { surfaceElevation, shadowElevation };
export type { SurfaceElevationKey, ShadowElevationKey, ElevationKey };
