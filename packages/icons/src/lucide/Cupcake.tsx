import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCupcake = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 22v-9M14 4h1a3 3 0 0 1 3 3l-.004.125A4 4 0 0 1 21 11v2M15.5 22l1.5-9M21 13a1 1 0 0 1 .919 1.394l-2.74 6.394A2 2 0 0 1 17.34 22H6.659a2 2 0 0 1-1.838-1.212l-2.74-6.394A1 1 0 0 1 3 13zM3 13v-2a4 4 0 0 1 3.003-3.875L6 7a3 3 0 0 1 3-3h1M8.5 22 7 13" />
    <circle cx={12} cy={4} r={2} />
  </svg>
);
export default SvgCupcake;
