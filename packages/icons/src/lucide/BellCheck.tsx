import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBellCheck = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10.268 21a2 2 0 0 0 3.464 0M15 8l2 2 4-4M16.86 4.482A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.531-.548-1.075-1.109-1.537-1.873" />
  </svg>
);
export default SvgBellCheck;
