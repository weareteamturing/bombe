import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCandyCane = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m10.8 5 2.111 4.223M17.75 7 15 2.1M4.874 14.647l2.12 4.24M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2zM7.906 9.712l2.005 4.411" />
  </svg>
);
export default SvgCandyCane;
