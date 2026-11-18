import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircleLetterF = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9 16V8.5a.5.5 0 0 1 .5-.5H15M9 12h4" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgCircleLetterF;
