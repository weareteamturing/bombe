import * as React from 'react';
import type { SVGProps } from 'react';
const SvgListChevronsUpDown = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 5h8M3 12h8M3 19h8M15 8l3-3 3 3M15 16l3 3 3-3" />
  </svg>
);
export default SvgListChevronsUpDown;
