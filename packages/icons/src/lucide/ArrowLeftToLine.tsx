import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowLeftToLine = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 19V5M13 6l-6 6 6 6M7 12h14" />
  </svg>
);
export default SvgArrowLeftToLine;
