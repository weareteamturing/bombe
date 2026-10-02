import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClefBass = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M19 11h.01M19 6h.01M5 8c0-4 4-4 4-4 6 0 6 6 6 6 0 7-10 11-10 11" />
    <circle cx={7} cy={8} r={2} />
  </svg>
);
export default SvgClefBass;
