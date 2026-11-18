import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSquareArrowUpEnter = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 21V11M16 15l-4-4-4 4" />
    <path d="M8 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
  </svg>
);
export default SvgSquareArrowUpEnter;
