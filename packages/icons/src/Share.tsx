import * as React from 'react';
import { SVGProps } from 'react';
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m7.533 9.211 3.354-3.355v9.181a1.1 1.1 0 0 0 2.201 0v-9.18l3.355 3.354a1.095 1.095 0 0 0 1.555 0 1.1 1.1 0 0 0 0-1.556l-5.233-5.233a1.104 1.104 0 0 0-1.555 0L5.977 7.655a1.101 1.101 0 0 0 1.556 1.556Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.381 13.093c-.607 0-1.101.493-1.101 1.1V18.4c0 .717-.583 1.3-1.299 1.3H5.996c-.717 0-1.3-.583-1.3-1.3v-4.208a1.1 1.1 0 0 0-2.2 0V18.4c0 1.93 1.57 3.5 3.5 3.5h11.985c1.929 0 3.5-1.57 3.5-3.5v-4.208a1.1 1.1 0 0 0-1.1-1.1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShare;
