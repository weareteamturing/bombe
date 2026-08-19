import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeading = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6 12h12M6 20V4M18 20V4" />
  </svg>
);
export default SvgHeading;
