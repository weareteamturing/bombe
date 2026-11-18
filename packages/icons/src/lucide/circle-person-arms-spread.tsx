import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCirclePersonArmsSpread = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m15 17-3-3M8 10s2 1 4 1 4-1 4-1M9 17l3-3v-3" />
    <circle cx={12} cy={12} r={10} />
    <circle cx={12} cy={7} r={0.5} fill="currentColor" />
  </svg>
);
export default SvgCirclePersonArmsSpread;
