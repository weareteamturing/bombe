import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <g clipPath="url(#crop_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.778.8a1.2 1.2 0 0 1 1.2 1.2v2.578h9.744a2.7 2.7 0 0 1 2.7 2.7v9.744H22a1.2 1.2 0 0 1 0 2.4h-2.578v2.58a1.2 1.2 0 0 1-2.4 0v-2.58H7.278a2.7 2.7 0 0 1-2.7-2.7V6.979H1.998a1.2 1.2 0 0 1 0-2.4h2.578v-2.58a1.2 1.2 0 0 1 1.2-1.2Zm1.2 15.922a.3.3 0 0 0 .3.3h9.744V7.279a.3.3 0 0 0-.3-.3H6.978v9.743Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="crop_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCrop;
