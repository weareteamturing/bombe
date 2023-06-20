import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLockColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="url(#lock_color_svg__a)"
      fillRule="evenodd"
      d="M12.9 14.755v2.199a.9.9 0 1 1-1.8 0v-2.199a1.793 1.793 0 0 1-.9-1.551 1.8 1.8 0 0 1 3.599 0c0 .665-.364 1.239-.899 1.551ZM8.82 7.179A3.183 3.183 0 0 1 12 4a3.182 3.182 0 0 1 3.179 3.179H8.82Zm9.779 0h-1.42A5.184 5.184 0 0 0 12 2a5.185 5.185 0 0 0-5.18 5.179H5.4a2.4 2.4 0 0 0-2.4 2.4v10.2a2.4 2.4 0 0 0 2.4 2.4h13.199a2.399 2.399 0 0 0 2.401-2.4v-10.2a2.4 2.4 0 0 0-2.401-2.4Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient id="lock_color_svg__a" x1={3} x2={23.048} y1={2} y2={19.883} gradientUnits="userSpaceOnUse">
        <stop stopColor="#03216D" />
        <stop offset={0.399} stopColor="#3F28D1" />
        <stop offset={1} stopColor="#F14BFF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgLockColor;
