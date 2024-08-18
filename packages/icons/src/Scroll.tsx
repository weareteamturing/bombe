import * as React from 'react';
import type { SVGProps } from 'react';
const SvgScroll = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.55 9.636a.695.695 0 0 0-.192.968l3.048 4.515c.883 1.31-.353 3.008-1.87 2.569l-.861-.249a.367.367 0 0 0-.215.703l4.634 1.502a1.96 1.96 0 0 0 1.693-.233l2.812-1.875a1.96 1.96 0 0 0 .537-2.729l-1.114-1.651a1.96 1.96 0 0 0-2.717-.533l-.452.303a1.872 1.872 0 0 1-2.594-.508l-1.75-2.591a.695.695 0 0 0-.959-.19Zm-1.97 2.168a2.84 2.84 0 1 1 4.708-3.177l1.597 2.366.226-.152a4.106 4.106 0 0 1 5.689 1.115l1.114 1.651a4.106 4.106 0 0 1-1.125 5.713l-2.813 1.875a4.106 4.106 0 0 1-3.544.49l-4.634-1.503a2.512 2.512 0 0 1 1.146-4.875L9.58 11.804Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.8 1a1 1 0 0 1 .707.293l3.5 3.5a1 1 0 0 1-1.414 1.414L5.8 4.414v11.372l1.793-1.793a1 1 0 0 1 1.414 1.414l-3.5 3.5a1 1 0 0 1-1.415 0l-3.5-3.5a1 1 0 0 1 1.415-1.414L3.8 15.786V4.414L2.007 6.207A1 1 0 0 1 .593 4.793l3.5-3.5A1 1 0 0 1 4.798 1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgScroll;
