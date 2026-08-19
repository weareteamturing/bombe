import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendarClock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 14v2.2l1.6 1M16 2v3M21 7.338V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2.338M3 9h5.859M8 2v3" />
    <circle cx={16} cy={16} r={6} />
  </svg>
);
export default SvgCalendarClock;
