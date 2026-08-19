import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowDown01 = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m3 16 4 4 4-4M7 20V4" />
    <rect width={4} height={6} x={15} y={4} ry={2} />
    <path d="M17 20v-6h-2M15 20h4" />
  </svg>
);
export default SvgArrowDown01;
