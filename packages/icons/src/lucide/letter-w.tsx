import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLetterW = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m21 4-4.794 15.821a.25.25 0 0 1-.471.021l-3.503-8.685a.25.25 0 0 0-.464 0l-3.503 8.685a.25.25 0 0 1-.47-.021L3 4" />
  </svg>
);
export default SvgLetterW;
