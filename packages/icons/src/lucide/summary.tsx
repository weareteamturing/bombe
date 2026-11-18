import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSummary = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 4H7M18 16l3 3-3 3" />
    <path d="M3 4v13a2 2 0 0 0 2 2h16M7 14h7M7 9h12" />
  </svg>
);
export default SvgSummary;
