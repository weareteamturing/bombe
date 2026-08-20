import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMop = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 22c2.761 0 5-1.79 5-4-4.42 0-4.08-5-8.5-5a1 1 0 1 0 0 9za3 3 0 0 1-3-3M12.5 11.5 22 2" />
    <path d="m6.98 13.02 2.665-2.664a1.21 1.21 0 0 1 1.71 0l2.29 2.288a1.21 1.21 0 0 1 0 1.712l-2.088 2.087" />
  </svg>
);
export default SvgMop;
