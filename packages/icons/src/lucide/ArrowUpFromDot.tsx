import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowUpFromDot = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m5 9 7-7 7 7M12 16V2" />
    <circle cx={12} cy={21} r={1} />
  </svg>
);
export default SvgArrowUpFromDot;
