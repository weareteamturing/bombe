import * as React from 'react';
import { SVGProps } from 'react';
const SvgPointInCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.357 8.715h-2.375v3.394h2.375a1.698 1.698 0 0 0 0-3.394Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.357 14.146h-2.375v2.715a1.02 1.02 0 0 1-2.037 0V6.678h4.412a3.737 3.737 0 0 1 3.733 3.735 3.737 3.737 0 0 1-3.733 3.733ZM12 .8C5.814.8.8 5.815.8 12c0 6.186 5.014 11.2 11.2 11.2 6.185 0 11.2-5.014 11.2-11.2C23.2 5.815 18.185.8 12 .8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPointInCircle;
