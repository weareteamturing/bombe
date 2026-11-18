import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLoaderPinwheel = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17 3.34A5 5 0 1 1 12 12a5 5 0 1 0-5 8.66" />
    <path d="M22 12a5 5 0 0 1-10 0 5 5 0 0 0-10 0" />
    <path d="M7 3.34A5 5 0 1 1 12 12a5 5 0 1 0 5 8.66" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgLoaderPinwheel;
