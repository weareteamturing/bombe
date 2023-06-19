import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDots = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 14.001a2.001 2.001 0 1 1 .001-4.002A2.001 2.001 0 0 1 5 14Zm6.771 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6.77 0a2.001 2.001 0 1 1 .001-4.002A2.001 2.001 0 0 1 18.541 14Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDots;
