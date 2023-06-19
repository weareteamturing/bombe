import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronUpTwo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 20.1a1.346 1.346 0 0 1 .396-.954l6.75-6.75a1.351 1.351 0 0 1 1.91 0l6.75 6.75a1.35 1.35 0 1 1-1.91 1.908L12.1 15.259l-5.794 5.795A1.35 1.35 0 0 1 4 20.1Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 10.1a1.346 1.346 0 0 1 .396-.954l6.75-6.75a1.35 1.35 0 0 1 1.91 0l6.75 6.75a1.35 1.35 0 1 1-1.91 1.908L12.1 5.259l-5.794 5.795A1.35 1.35 0 0 1 4 10.1Z"
      clipRule="evenodd"
      opacity={0.6}
    />
  </svg>
);
export default SvgChevronUpTwo;
