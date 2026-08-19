import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDivide = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={6} r={1} />
    <path d="M5 12h14" />
    <circle cx={12} cy={18} r={1} />
  </svg>
);
export default SvgDivide;
