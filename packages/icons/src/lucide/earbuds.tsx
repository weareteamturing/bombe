import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEarbuds = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M18 3a4 4 90 0 0-4 4v12a2 2 90 0 0 4 0v-8a5 5 90 0 0 3.75-1.693 1 1 90 0 0 .25-.661V5.354a1 1 90 0 0-.25-.661A5 5 90 0 0 18 3M6 3a4 4 0 0 1 4 4v12a2 2 0 0 1-4 0v-8a5 5 0 0 1-3.75-1.693A1 1 0 0 1 2 8.646V5.354a1 1 0 0 1 .25-.661A5 5 0 0 1 6 3" />
  </svg>
);
export default SvgEarbuds;
