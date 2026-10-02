import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBridge = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 9.728V16M14 9.728V16M18 20V4M22 11l-4-4A7.5 7.5 0 0 1 6 7l-4 4M22 16H2M6 20V4" />
  </svg>
);
export default SvgBridge;
