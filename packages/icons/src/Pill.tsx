import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <g fill="currentColor" clipPath="url(#pill_svg__a)">
      <path d="M12 4a5.657 5.657 0 0 1 8 8l-4 4-8-8 4-4Z" opacity={0.4} />
      <path d="m8 8 8 8-4 4a5.657 5.657 0 1 1-8-8l4-4Z" />
    </g>
    <defs>
      <clipPath id="pill_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPill;
