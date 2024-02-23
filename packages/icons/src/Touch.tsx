import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTouch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <g fill="currentColor" fillRule="evenodd" clipPath="url(#touch_svg__a)" clipRule="evenodd">
      <path d="M.6 5.906A4.106 4.106 0 0 1 4.706 1.8h9.1a4.106 4.106 0 0 1 4.106 4.106v2.868a1.073 1.073 0 0 1-2.145 0V5.906a1.96 1.96 0 0 0-1.96-1.96H4.705a1.96 1.96 0 0 0-1.961 1.96v9.1a1.96 1.96 0 0 0 1.961 1.961h1.848a1.073 1.073 0 1 1 0 2.145H4.706A4.106 4.106 0 0 1 .6 15.006v-9.1Z" />
      <path d="M11.483 10.636a.695.695 0 0 0-.192.968l3.048 4.515c.883 1.31-.353 3.008-1.87 2.569l-.86-.249a.367.367 0 0 0-.216.702l4.634 1.503a1.96 1.96 0 0 0 1.693-.233l2.812-1.875a1.96 1.96 0 0 0 .538-2.729l-1.115-1.652a1.96 1.96 0 0 0-2.717-.532l-.452.303a1.872 1.872 0 0 1-2.594-.508l-1.75-2.591a.694.694 0 0 0-.959-.19Zm-1.97 2.168a2.84 2.84 0 0 1 4.708-3.177l1.597 2.366.226-.152a4.106 4.106 0 0 1 5.689 1.115l1.115 1.651a4.106 4.106 0 0 1-1.126 5.713l-2.812 1.875a4.106 4.106 0 0 1-3.545.49l-4.634-1.503a2.512 2.512 0 0 1 1.147-4.875l-2.365-3.503Z" />
    </g>
    <defs>
      <clipPath id="touch_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTouch;
