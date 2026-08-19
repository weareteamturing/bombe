import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSquarePercent = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={18} x={3} y={3} rx={2} />
    <path d="m15 9-6 6M9 9h.01M15 15h.01" />
  </svg>
);
export default SvgSquarePercent;
