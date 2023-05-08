import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.646 3.879a1.345 1.345 0 0 1 .954.396l6.75 6.75a1.351 1.351 0 0 1 0 1.91l-6.75 6.75a1.35 1.35 0 1 1-1.908-1.91l5.794-5.796-5.794-5.795a1.35 1.35 0 0 1 .954-2.305Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronRight;
