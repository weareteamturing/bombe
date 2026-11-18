import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSwissFranc = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 10h7M10 20V5a1 1 0 0 1 1-1h7M6 16h9" />
  </svg>
);
export default SvgSwissFranc;
