import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircleLetterV = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m9 8 2.525 7.66a.5.5 0 0 0 .95 0L15 8" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgCircleLetterV;
