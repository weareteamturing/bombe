import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowDown10 = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m3 16 4 4 4-4M7 20V4M17 10V4h-2M15 10h4" />
    <rect width={4} height={6} x={15} y={14} ry={2} />
  </svg>
);
export default SvgArrowDown10;
