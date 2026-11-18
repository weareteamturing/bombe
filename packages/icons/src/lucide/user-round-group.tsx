import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserRoundGroup = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17 21a5 5 0 0 0-10 0M22 10.5a3.5 3.5 0 0 0-5.507-2.868M7.507 7.632A3.5 3.5 0 0 0 2 10.5" />
    <circle cx={12} cy={13} r={3} />
    <circle cx={18.5} cy={4.5} r={2.5} />
    <circle cx={5.5} cy={4.5} r={2.5} />
  </svg>
);
export default SvgUserRoundGroup;
