import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLineDotLeftHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9 12h12" />
    <circle cx={6} cy={12} r={3} />
  </svg>
);
export default SvgLineDotLeftHorizontal;
