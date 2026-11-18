import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMoveDiagonal = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11 19H5v-6M13 5h6v6M19 5 5 19" />
  </svg>
);
export default SvgMoveDiagonal;
