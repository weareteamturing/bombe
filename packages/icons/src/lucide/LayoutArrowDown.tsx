import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLayoutArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={7} height={7} x={3} y={14} rx={1} />
    <path d="M18 3v18M21 18l-3 3-3-3" />
  </svg>
);
export default SvgLayoutArrowDown;
