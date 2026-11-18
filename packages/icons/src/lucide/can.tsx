import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCan = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M21 10.5a9 2.5 0 0 1-18 0v8a9 2.5 0 0 0 18 0z" />
    <path d="M21 10.5A9 2.5 25.32 0 0 4.59 3.47 9 2.5 25.32 0 0 21 10.5" />
    <path d="M3 10.5a9 2.5 0 0 1 6.527-2.405M9 16.858a31 31 0 0 0 6 0" />
  </svg>
);
export default SvgCan;
