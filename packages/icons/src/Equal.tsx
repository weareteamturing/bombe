import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEqual = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.94 10.12H6.06c-.82 0-1.485-.56-1.485-1.252S5.24 7.615 6.06 7.615h11.88c.82 0 1.485.561 1.485 1.253 0 .691-.665 1.253-1.485 1.253m0 6.264H6.06c-.82 0-1.485-.561-1.485-1.253 0-.691.665-1.253 1.485-1.253h11.88c.82 0 1.485.562 1.485 1.253 0 .692-.665 1.253-1.485 1.253Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEqual;
