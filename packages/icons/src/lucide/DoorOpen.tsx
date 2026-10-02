import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDoorOpen = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 21H2M10 3H7a2 2 0 0 0-2 2v16M14 12h.01" />
    <path d="M19 21V5a2 2 0 0 0-1.675-1.974l-6.163-1.013A1 1 0 0 0 10 3v18a1 1 0 0 0 1.124.992zM22 21h-3" />
  </svg>
);
export default SvgDoorOpen;
