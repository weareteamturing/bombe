import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFileFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M15 6V1l6 6h-5a1 1 0 0 1-1-1Z" />
    <path fill="currentColor" d="M13 6a3 3 0 0 0 3 3h5v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h7v5Z" />
  </svg>
);
export default SvgFileFilled;
