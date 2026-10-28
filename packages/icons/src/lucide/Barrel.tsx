import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBarrel = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10.5 2a34.5 34.5 0 0 0 0 20M13.5 2a34.5 34.5 0 0 1 0 20M4.67 17h14.67M4.67 7h14.67" />
    <path d="M6.23 3.06a19 19 0 0 0 0 17.88A2 2 0 0 0 8 22h8a2 2 0 0 0 1.77-1.06 19 19 0 0 0 0-17.88A2 2 0 0 0 16 2H8a2 2 0 0 0-1.77 1.06" />
  </svg>
);
export default SvgBarrel;
