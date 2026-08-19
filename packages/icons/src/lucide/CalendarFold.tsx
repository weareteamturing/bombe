import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendarFold = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 2v3M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10v-5a1 1 0 0 1 1-1za2.4 2.4 0 0 1-.706 1.706l-3.588 3.588A2.4 2.4 0 0 1 15 21M3 9h18M8 2v3" />
  </svg>
);
export default SvgCalendarFold;
