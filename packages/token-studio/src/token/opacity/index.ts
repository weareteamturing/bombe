import _opacity from '../../foundation/opacity';

const opacity = {
  disabled: _opacity.opacity50,
} as const;

type OpacityKey = keyof typeof opacity;

export default opacity;
export type { OpacityKey };
