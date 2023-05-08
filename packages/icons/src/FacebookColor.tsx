import * as React from 'react';
import { SVGProps } from 'react';
const SvgFacebookColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="#1877F2" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m14.525 12.43.293-1.908h-1.83V9.284c0-.522.255-1.03 1.075-1.03h.832V6.628S14.14 6.5 13.418 6.5c-1.508 0-2.493.914-2.493 2.568v1.454H9.249v1.908h1.676v4.612a6.654 6.654 0 0 0 2.062 0V12.43h1.538Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFacebookColor;
