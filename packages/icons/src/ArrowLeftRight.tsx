import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowLeftRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.951 7.758h13.442l-2.494 2.494a1.101 1.101 0 0 0 1.556 1.555l4.371-4.372a1.093 1.093 0 0 0 0-1.556l-4.371-4.37a1.1 1.1 0 1 0-1.556 1.555l2.494 2.494H3.951a1.1 1.1 0 0 0 0 2.2Zm16.098 8.483H6.607L9.1 13.747a1.1 1.1 0 0 0-1.556-1.555l-4.372 4.371a1.096 1.096 0 0 0 0 1.556l4.372 4.372A1.1 1.1 0 1 0 9.1 20.935l-2.494-2.494h13.442a1.1 1.1 0 0 0 0-2.2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLeftRight;
