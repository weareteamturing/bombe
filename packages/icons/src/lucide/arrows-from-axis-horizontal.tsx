import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowsFromAxisHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 16v6M12 2v6M15 19l-3 3-3-3M15 5l-3-3-3 3M22 12H2" />
  </svg>
);
export default SvgArrowsFromAxisHorizontal;
