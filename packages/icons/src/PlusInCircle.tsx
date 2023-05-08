import * as React from 'react';
import { SVGProps } from 'react';
const SvgPlusInCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.492 13h-3.5v3.5a1 1 0 0 1-2 0V13h-3.5a1 1 0 0 1 0-2h3.5V7.5a1 1 0 0 1 2 0V11h3.5a1 1 0 0 1 0 2ZM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlusInCircle;
