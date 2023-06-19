import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.318 10.8h-7v-7a1.2 1.2 0 1 0-2.4 0v7h-7a1.2 1.2 0 1 0 0 2.4h7v7a1.2 1.2 0 1 0 2.4 0v-7h7a1.2 1.2 0 0 0 0-2.4Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlus;
