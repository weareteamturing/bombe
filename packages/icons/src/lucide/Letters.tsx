import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLetters = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 8H9M21 15.354a4 4 0 1 0 0 5.292M3 18h4a2 2 0 0 1 0 4H3.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H6a2 2 0 0 1 0 4M8 10l3.453-7.648a.6.6 0 0 1 1.094 0L16 10" />
  </svg>
);
export default SvgLetters;
