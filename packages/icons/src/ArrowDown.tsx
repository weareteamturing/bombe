import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.28 3.534V17.57l5.451-5.451a1.2 1.2 0 1 1 1.697 1.697l-7.5 7.5c-.002.003-.006.004-.009.007a1.2 1.2 0 0 1-1.298.252 1.19 1.19 0 0 1-.38-.252l-.01-.007-7.5-7.5a1.196 1.196 0 0 1-.35-.848 1.2 1.2 0 0 1 2.048-.849l5.451 5.45V3.535a1.2 1.2 0 1 1 2.4 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDown;
