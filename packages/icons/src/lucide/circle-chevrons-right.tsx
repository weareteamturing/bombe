import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircleChevronsRight = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m14 15 3-3-3-3M8 15l3-3-3-3" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgCircleChevronsRight;
