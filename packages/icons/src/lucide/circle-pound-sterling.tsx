import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCirclePoundSterling = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 16V9.5a1 1 0 0 1 5 0M8 12h4M8 16h7" />
  </svg>
);
export default SvgCirclePoundSterling;
