import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendarArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m14 17 4-4 4 4M16 2v3M18 21v-8" />
    <path d="M21 10.343V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9M3 9h18M8 2v3" />
  </svg>
);
export default SvgCalendarArrowUp;
