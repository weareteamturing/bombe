import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRockingChair = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m15 13 3.708 7.416M3 19a15 15 0 0 0 18 0M3 2l3.21 9.633A2 2 0 0 0 8.109 13H18M9 13l-3.708 7.416" />
  </svg>
);
export default SvgRockingChair;
