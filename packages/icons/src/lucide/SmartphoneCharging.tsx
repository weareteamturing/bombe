import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSmartphoneCharging = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={14} height={20} x={5} y={2} rx={2} ry={2} />
    <path d="M12.667 8 10 12h4l-2.667 4" />
  </svg>
);
export default SvgSmartphoneCharging;
