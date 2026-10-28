import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendarArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 2v3M18 21l3-3h-6" />
    <path d="M21 12.34V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.35M21 18l-3-3M3 9h18M8 2v3" />
  </svg>
);
export default SvgCalendarArrowRight;
