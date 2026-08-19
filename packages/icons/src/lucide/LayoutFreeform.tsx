import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLayoutFreeform = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={7} height={7} x={3} y={3} rx={1} />
    <rect width={7} height={7} x={14} y={4} rx={1} />
    <rect width={7} height={7} x={4} y={14} rx={1} />
  </svg>
);
export default SvgLayoutFreeform;
