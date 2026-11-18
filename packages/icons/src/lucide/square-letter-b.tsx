import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSquareLetterB = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9 12h4.846a2.24 2.24 0 0 1 1.523.586 2 2 0 0 1 .001 2.828 2.24 2.24 0 0 1-1.524.586H9.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H13a2 2 0 0 1 0 4" />
    <rect width={18} height={18} x={3} y={3} rx={2} />
  </svg>
);
export default SvgSquareLetterB;
