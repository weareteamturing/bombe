import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTextWrap = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m16 16-3 3 3 3" />
    <path d="M3 12h14.5a1 1 0 0 1 0 7H13M3 19h6M3 5h18" />
  </svg>
);
export default SvgTextWrap;
