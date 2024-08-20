import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPresent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 25" {...props}>
    <path
      fill="currentColor"
      d="M3.39 8.764a2 2 0 0 1 2-2h5.5v16h-5.5a2 2 0 0 1-2-2v-12ZM13.89 6.764h5.5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5.5v-16Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.89 6.764H6.745l-.346-2.908c-.087-.729.64-1.288 1.335-1.027L12.39 4.58l4.658-1.751c.694-.261 1.421.298 1.335 1.027l-.347 2.908H13.89v16h-3v-16Z"
      clipRule="evenodd"
      opacity={0.6}
    />
  </svg>
);
export default SvgPresent;
