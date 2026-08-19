import * as React from 'react';
import type { SVGProps } from 'react';
const SvgOption = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14 3h7M3 3h5.28a1 1 0 0 1 .948.684l5.544 16.632a1 1 0 0 0 .949.684H21" />
  </svg>
);
export default SvgOption;
