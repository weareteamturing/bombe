import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDisc3 = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={10} />
    <path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
    <circle cx={12} cy={12} r={2} />
    <path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
  </svg>
);
export default SvgDisc3;
