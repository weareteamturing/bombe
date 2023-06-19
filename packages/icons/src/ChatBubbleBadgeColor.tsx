import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChatBubbleBadgeColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 64 65" {...props}>
    <g clipPath="url(#chat_bubble_badge_color_svg__a)">
      <path
        fill="#D1D5DB"
        fillRule="evenodd"
        d="M32 8.5c-13.255 0-24 9.782-24 21.851 0 5.812 2.51 11.08 6.574 14.997L12.59 55.12a1.157 1.157 0 0 0 .414 1.133 1.14 1.14 0 0 0 1.193.136l10.813-5.136c2.277.63 4.628.949 6.99.948 13.255 0 24-9.782 24-21.851C56 18.282 45.255 8.5 32 8.5Z"
        clipRule="evenodd"
      />
      <circle cx={52} cy={12.5} r={12} fill="#F5525D" />
      <path fill="#fff" d="M56.078 8.5h-1.746v5.39h-.082L50.547 8.5H49v8.484h1.758v-5.39h.07l3.727 5.39h1.523V8.5Z" />
    </g>
    <defs>
      <clipPath id="chat_bubble_badge_color_svg__a">
        <path fill="#fff" d="M0 .5h64v64H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChatBubbleBadgeColor;
