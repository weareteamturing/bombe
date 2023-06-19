import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.079 5.31 12.989.64a1.029 1.029 0 0 0-1.543.89v1.44a5.14 5.14 0 0 1-2.57 4.452L2.923 10.86a1.028 1.028 0 0 0 0 1.781l5.395 3.114c-.047.055-.104.096-.14.16L4.722 21.9A1.2 1.2 0 0 0 6.8 23.1l3.456-5.984c.037-.065.044-.135.067-.202l5.396 3.114a1.028 1.028 0 0 0 1.542-.89v-6.874c0-1.837.979-3.534 2.57-4.452l1.248-.72a1.028 1.028 0 0 0 0-1.782Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPin;
