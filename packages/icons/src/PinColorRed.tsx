import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPinColorRed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 16 17" {...props}>
    <g clipPath="url(#pin_color_red_svg__a)">
      <path
        fill="#F5525D"
        d="m8.66.927 5.393 3.113a.685.685 0 0 1 0 1.188l-.832.48a3.426 3.426 0 0 0-1.714 2.968v4.583a.685.685 0 0 1-1.028.593l-3.597-2.076-1.337-.773L1.95 8.927a.685.685 0 0 1 0-1.187l3.968-2.292A3.426 3.426 0 0 0 7.631 2.48v-.96A.686.686 0 0 1 8.659.927Z"
      />
      <path fill="#7A828D" stroke="currentColor" d="m3.583 15.345 2.12-3.672.52.3-2.12 3.672a.3.3 0 0 1-.52-.3Z" />
    </g>
    <defs>
      <clipPath id="pin_color_red_svg__a">
        <path fill="#fff" d="M0 .5h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPinColorRed;
