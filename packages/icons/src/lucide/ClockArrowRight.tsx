import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClockArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 6v6l2 1" />
    <path d="M13.5 21.885A10 10 0 1 1 22 12M14 18h8" />
    <path d="m18 22 4-4-4-4" />
  </svg>
);
export default SvgClockArrowRight;
