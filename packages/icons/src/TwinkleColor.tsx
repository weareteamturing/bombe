import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTwinkleColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="url(#twinkle_color_svg__a)"
      d="M19.42 18.696a.808.808 0 0 1 .36-.36l2.084-1.043a.808.808 0 0 0 0-1.444l-2.084-1.042a.808.808 0 0 1-.36-.361l-1.043-2.084a.808.808 0 0 0-1.444 0l-1.042 2.084a.807.807 0 0 1-.361.361l-2.084 1.042a.808.808 0 0 0 0 1.444l2.084 1.042a.807.807 0 0 1 .361.361l1.042 2.084a.808.808 0 0 0 1.445 0l1.041-2.084Z"
    />
    <path
      fill="url(#twinkle_color_svg__b)"
      d="M10.877 11.81a.807.807 0 0 1 .36-.362l3.35-1.674a.808.808 0 0 0 0-1.445l-3.35-1.674a.807.807 0 0 1-.36-.362L9.202 2.945a.808.808 0 0 0-1.445 0L6.083 6.293a.808.808 0 0 1-.361.362L2.373 8.329a.808.808 0 0 0 0 1.445l3.349 1.674a.807.807 0 0 1 .361.361l1.674 3.349a.808.808 0 0 0 1.445 0l1.675-3.349Z"
    />
    <defs>
      <linearGradient
        id="twinkle_color_svg__a"
        x1={1.927}
        x2={24.244}
        y1={2.498}
        y2={5.143}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6DEB" />
        <stop offset={0.5} stopColor="#8E6EF1" />
        <stop offset={1} stopColor="#5F9EFF" />
      </linearGradient>
      <linearGradient
        id="twinkle_color_svg__b"
        x1={1.927}
        x2={24.244}
        y1={2.498}
        y2={5.143}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6DEB" />
        <stop offset={0.5} stopColor="#8E6EF1" />
        <stop offset={1} stopColor="#5F9EFF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgTwinkleColor;
