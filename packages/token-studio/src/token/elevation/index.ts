import shadow from '../../foundation/shadow';

const elevation = {
  'shadow/overlay': shadow.shadowMedium,
};

type ElevationKey = keyof typeof elevation;

export default elevation;
export type { ElevationKey };
