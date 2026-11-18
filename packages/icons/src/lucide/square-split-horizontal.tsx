import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSquareSplitHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 2v20M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3" />
  </svg>
);
export default SvgSquareSplitHorizontal;
