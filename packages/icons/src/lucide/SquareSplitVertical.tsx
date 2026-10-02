import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSquareSplitVertical = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 12h20M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" />
  </svg>
);
export default SvgSquareSplitVertical;
