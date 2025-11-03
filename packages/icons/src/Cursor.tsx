import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCursor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <g clipPath="url(#cursor_svg__a)">
      <path
        fill="currentColor"
        d="M4.199 3.485c-.089-1.248 1.299-2.05 2.335-1.349l14.9 10.077c1.047.708.796 2.294-.375 2.669l-.115.033-7.113 1.703a1.5 1.5 0 0 0-.739.427L8.06 22.353l-.086.084c-.91.826-2.409.25-2.499-1.01L4.2 3.485Zm3.524 15.734 3.628-3.825.201-.198A3.9 3.9 0 0 1 13 14.36l.272-.075 5.125-1.229L6.724 5.162l1 14.057Z"
      />
    </g>
    <defs>
      <clipPath id="cursor_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCursor;
