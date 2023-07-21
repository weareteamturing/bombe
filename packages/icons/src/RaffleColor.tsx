import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRaffleColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="#fff" d="M20.459 9.874a8.538 8.538 0 1 1-17.076 0 8.538 8.538 0 0 1 17.076 0Z" />
    <path
      fill="#E5E7EB"
      fillRule="evenodd"
      d="M11.92 18.049a8.175 8.175 0 1 0 0-16.349 8.175 8.175 0 0 0 0 16.349Zm0 .363a8.538 8.538 0 1 0 0-17.075 8.538 8.538 0 0 0 0 17.075Z"
      clipRule="evenodd"
    />
    <path fill="#6D99F1" d="M15.158 5.442a3.3 3.3 0 0 0-3.966 2.461l6.426 1.505a3.3 3.3 0 0 0-2.46-3.966Z" />
    <path fill="#E5E7EB" d="M13.652 11.869a3.3 3.3 0 0 0 3.966-2.461l-6.426-1.505a3.3 3.3 0 0 0 2.46 3.966Z" />
    <path fill="#6D99F1" d="M7.378 4.313a3.3 3.3 0 0 0-.645 4.623L12 4.958a3.3 3.3 0 0 0-4.622-.645Z" />
    <path fill="#E5E7EB" d="M11.355 9.58A3.3 3.3 0 0 0 12 4.959L6.733 8.936a3.3 3.3 0 0 0 4.622.645Z" />
    <path fill="#9C7EEF" d="M8.062 8.7a3.3 3.3 0 0 0-3.3 3.3h6.6a3.3 3.3 0 0 0-3.3-3.3Z" />
    <path fill="#E5E7EB" d="M8.062 15.301a3.3 3.3 0 0 0 3.3-3.3h-6.6a3.3 3.3 0 0 0 3.3 3.3Z" />
    <path fill="#FFC107" d="M10.938 9.31a3.3 3.3 0 0 0-1.207 4.508l5.716-3.3a3.3 3.3 0 0 0-4.508-1.209Z" />
    <path fill="#E5E7EB" d="M14.239 15.025a3.3 3.3 0 0 0 1.207-4.508l-5.715 3.3a3.3 3.3 0 0 0 4.508 1.208Z" />
    <path fill="#9C7EEF" d="M16.819 9.05a3.3 3.3 0 0 0-4.2 2.036l6.236 2.163a3.3 3.3 0 0 0-2.036-4.2Z" />
    <path fill="#E5E7EB" d="M14.655 15.285a3.3 3.3 0 0 0 4.2-2.036l-6.236-2.163a3.3 3.3 0 0 0 2.036 4.2Z" />
    <path
      fill="url(#raffle_color_svg__a)"
      d="M5.27 15.945c0-.416.337-.753.753-.753h11.558c.416 0 .754.337.754.753v5.62a.754.754 0 0 1-.754.753H6.023a.754.754 0 0 1-.753-.753v-5.62Z"
    />
    <path
      fill="#fff"
      d="M6.278 15.075c0-.06.048-.107.108-.107h4.467c.06 0 .108.048.108.107v3.73c0 .833-.675 1.508-1.507 1.508H7.785a1.507 1.507 0 0 1-1.507-1.508v-3.73Z"
    />
    <path fill="#D1D5DB" d="M10.401 18.103a1.782 1.782 0 1 1-3.563 0 1.782 1.782 0 0 1 3.563 0Z" />
    <path
      fill="currentColor"
      d="M7.263 17.864c0-.059.048-.107.107-.107h2.5c.058 0 .106.048.106.107v.425a.106.106 0 0 1-.107.106h-2.5a.106.106 0 0 1-.106-.106v-.425Z"
    />
    <g filter="url(#raffle_color_svg__b)">
      <path
        fill="#835EEB"
        d="M13.06 19.323c0-.357.29-.646.646-.646h3.122c.356 0 .646.289.646.646v3.014H13.06v-3.014Z"
      />
    </g>
    <defs>
      <linearGradient
        id="raffle_color_svg__a"
        x1={6.11}
        x2={21.64}
        y1={3.377}
        y2={19.175}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8E6CF0" />
        <stop offset={1} stopColor="#CF75F3" />
      </linearGradient>
      <filter
        id="raffle_color_svg__b"
        width={4.683}
        height={3.875}
        x={12.791}
        y={18.677}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={-0.269} dy={0.215} />
        <feGaussianBlur stdDeviation={0.404} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_12781_25756" />
      </filter>
    </defs>
  </svg>
);
export default SvgRaffleColor;
