import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClockCheck = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M21.95 13a10 10 0 1 0-8.685 8.92" />
    <path d="M12 6v6l4 2M16 19l2 2 4-4" />
  </svg>
);
export default SvgClockCheck;
