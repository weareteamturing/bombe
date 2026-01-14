import * as React from 'react';
import type { SVGProps } from 'react';
const SvgComment = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M20.71 12a8.71 8.71 0 1 0-17.42 0v8.04c0 .37.3.67.67.67H12c4.81 0 8.71-3.9 8.71-8.71ZM23 12c0 6.075-4.925 11-11 11H3.96A2.96 2.96 0 0 1 1 20.04V12C1 5.925 5.925 1 12 1s11 4.925 11 11Z"
    />
  </svg>
);
export default SvgComment;
