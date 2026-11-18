import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCap = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11.04 4.017a12 12 0 0 0-2.631 11.101" />
    <path d="M5 16c3.298 0 6-3 10-3a8 8 0 0 1 6.81 3.799 1.33 1.33 0 0 1 .19.701.5.5 0 0 1-.5.5c-.732.001-2.04-1.004-3.5-1-3.005.008-5.197 2.982-8 3-2.761 0-5-1.79-5-4-1.5 0-2.543-.664-2.713-1.3A8.5 8.5 0 1 1 19 12.5a8.6 8.6 0 0 1-.131 1.496" />
  </svg>
);
export default SvgCap;
