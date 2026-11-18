import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendarChevronsLeft = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m11 21-3-3 3-3M16 2v3M21 9H3" />
    <path d="M3 11.5V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M5 21l-3-3 3-3M8 2v3" />
  </svg>
);
export default SvgCalendarChevronsLeft;
