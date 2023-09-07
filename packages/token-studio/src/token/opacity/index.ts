import _opacity from '../../foundation/opacity';

const accentOpacity = {
  accent: _opacity.opacity50,
} as const;

const opacity = {
  ...accentOpacity,
} as const;

type AccentOpacityKey = keyof typeof accentOpacity;
type OpacityKey = keyof typeof opacity;

export default opacity;
export { accentOpacity };
export type { AccentOpacityKey, OpacityKey };
