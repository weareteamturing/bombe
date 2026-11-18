import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTagX = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.43 2.43 0 0 0 3.42 0l1.79-1.79M16.5 10.5l5 5M21.5 10.5l-5 5" />
    <circle cx={7.5} cy={7.5} r={0.5} fill="currentColor" />
  </svg>
);
export default SvgTagX;
