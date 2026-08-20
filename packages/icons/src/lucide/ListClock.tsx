import * as React from 'react';
import type { SVGProps } from 'react';
const SvgListClock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 13v2.2l1.6 1M3 12h3.458M3 19h3.832M3 5h18" />
    <circle cx={16} cy={15} r={6} />
  </svg>
);
export default SvgListClock;
