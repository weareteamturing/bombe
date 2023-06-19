import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloseInCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.207 14.793a1 1 0 0 1-1.414 1.414L12 13.414l-2.793 2.793a.997.997 0 0 1-1.631-.324 1 1 0 0 1 .217-1.09L10.586 12 7.793 9.207a1 1 0 0 1 1.414-1.414L12 10.586l2.793-2.793a1 1 0 1 1 1.414 1.414L13.414 12l2.793 2.793ZM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloseInCircle;
