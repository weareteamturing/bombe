import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendarX2 = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 2v3M17 16l5 5M17 21l5-5M21 12V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M3 9h18M8 2v3" />
  </svg>
);
export default SvgCalendarX2;
