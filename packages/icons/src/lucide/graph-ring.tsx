import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGraphRing = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17.006 19.241a8 8 0 0 1-10.011 0M19.919 14.143a8 8 0 0 0-4.971-8.583M4.081 14.143A8 8 0 0 1 9.052 5.56" />
    <circle cx={12} cy={5.001} r={3} />
    <circle cx={19} cy={17} r={3} />
    <circle cx={5} cy={17} r={3} />
  </svg>
);
export default SvgGraphRing;
