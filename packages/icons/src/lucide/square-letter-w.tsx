import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSquareLetterW = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m16 8-1.591 7.598a.497.497 0 0 1-.97.038l-.96-3.276a.5.5 0 0 0-.959 0l-.96 3.276a.496.496 0 0 1-.969-.038L8 8" />
    <rect width={18} height={18} x={3} y={3} rx={2} />
  </svg>
);
export default SvgSquareLetterW;
