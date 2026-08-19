import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStretchHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={20} height={6} x={2} y={4} rx={2} />
    <rect width={20} height={6} x={2} y={14} rx={2} />
  </svg>
);
export default SvgStretchHorizontal;
