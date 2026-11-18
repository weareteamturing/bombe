import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFileType = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 6a3 3 0 0 0 3 3h5v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h7v5Zm-3.5 5a1.5 1.5 0 0 0-.95.34l-.11.1A1.5 1.5 0 0 0 8 12.5v.5a1 1 0 1 0 2 0h1v4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-4h1a1 1 0 1 0 2 0v-.5a1.5 1.5 0 0 0-.34-.95l-.1-.11-.109-.1A1.502 1.502 0 0 0 14.5 11h-5Z"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M21 7h-5a1 1 0 0 1-1-1V1l6 6Z" />
  </svg>
);
export default SvgFileType;
