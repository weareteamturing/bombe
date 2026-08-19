import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowRightToLine = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17 12H3M11 18l6-6-6-6M21 5v14" />
  </svg>
);
export default SvgArrowRightToLine;
