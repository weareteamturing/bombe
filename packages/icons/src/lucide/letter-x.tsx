import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLetterX = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M18 4 6 20M6 4l12 16" />
  </svg>
);
export default SvgLetterX;
