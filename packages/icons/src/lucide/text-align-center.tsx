import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTextAlignCenter = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M21 5H3M17 12H7M19 19H5" />
  </svg>
);
export default SvgTextAlignCenter;
