import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowsUpFromLine = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m4 6 3-3 3 3M7 17V3M14 6l3-3 3 3M17 17V3M4 21h16" />
  </svg>
);
export default SvgArrowsUpFromLine;
