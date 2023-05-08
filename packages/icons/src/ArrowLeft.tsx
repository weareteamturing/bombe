import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.966 10.8H6.93l5.451-5.451a1.2 1.2 0 1 0-1.697-1.697l-7.5 7.5c-.003.002-.004.006-.007.009a1.2 1.2 0 0 0 0 1.678l.007.01 7.5 7.5a1.198 1.198 0 0 0 1.514.148 1.2 1.2 0 0 0 .183-1.846L6.931 13.2h14.036a1.2 1.2 0 1 0 0-2.4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLeft;
