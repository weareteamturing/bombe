import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowBelow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.2}
      d="m14.293 20.046 4.64-4.639-4.64-4.64"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.2}
      d="M18.932 15.407H7.568a2.5 2.5 0 0 1-2.5-2.5V3.953"
    />
  </svg>
);
export default SvgArrowBelow;
