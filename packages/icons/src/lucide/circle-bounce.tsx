import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircleBounce = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 13c2.5.5 5 4 5 8 0-2.16 1.813-7.536 6-11.293" />
    <circle cx={19} cy={6} r={3} />
  </svg>
);
export default SvgCircleBounce;
