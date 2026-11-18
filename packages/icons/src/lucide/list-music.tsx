import * as React from 'react';
import type { SVGProps } from 'react';
const SvgListMusic = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 5H3M11 12H3M11 19H3M21 16V5" />
    <circle cx={18} cy={16} r={3} />
  </svg>
);
export default SvgListMusic;
