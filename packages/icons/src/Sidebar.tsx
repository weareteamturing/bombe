import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSidebar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.5 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h17a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-17Zm-1 3a1 1 0 0 1 1-1h3v14h-3a1 1 0 0 1-1-1V6Zm6 13h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-12v14Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSidebar;
