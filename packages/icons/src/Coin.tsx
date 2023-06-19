import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18 13.247h-2.011l-.72 2.619a1.096 1.096 0 0 1-1.066.812h-.001c-.504 0-.932-.327-1.065-.812L12 11.738l-1.136 4.128a1.096 1.096 0 0 1-1.066.812c-.504 0-.932-.326-1.066-.811l-.721-2.62H6a.9.9 0 1 1 0-1.8h1.516l-.631-2.292a.9.9 0 1 1 1.735-.477l1.178 4.278 1.136-4.127A1.095 1.095 0 0 1 12 8.016c.504 0 .933.327 1.066.813l1.137 4.127 1.177-4.278a.9.9 0 0 1 1.736.477l-.632 2.292H18a.9.9 0 1 1 0 1.8ZM12 1C5.925 1 1 5.925 1 12c0 6.076 4.925 11 11 11s11-4.924 11-11c0-6.075-4.925-11-11-11Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCoin;
