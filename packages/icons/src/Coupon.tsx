import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoupon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.5 4h-3L17 5l-1.5-1h-12c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12l1.5-1 1.5 1h3c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1Zm-4 14.3h-1v-1.1h1v1.1Zm0-2.3h-1v-1.1h1V16Zm0-2.3h-1v-1.1h1v1.1Zm0-2.3h-1v-1.1h1v1.1Zm0-2.3h-1V8h1v1.1Zm0-2.2h-1V5.7h1v1.2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCoupon;
