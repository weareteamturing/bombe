import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSquareArrowUpExit = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 13V3M16 7l-4-4-4 4" />
    <path d="M6.33 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1.33" />
  </svg>
);
export default SvgSquareArrowUpExit;
