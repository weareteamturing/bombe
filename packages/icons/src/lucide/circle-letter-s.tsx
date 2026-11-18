import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircleLetterS = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14.5 8H11a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4H9" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgCircleLetterS;
