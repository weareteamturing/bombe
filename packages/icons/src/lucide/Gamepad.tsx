import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGamepad = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6 12h4M8 10v4M15 13h.01M18 11h.01" />
    <rect width={20} height={12} x={2} y={6} rx={2} />
  </svg>
);
export default SvgGamepad;
