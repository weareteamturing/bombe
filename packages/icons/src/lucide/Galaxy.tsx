import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGalaxy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M16.005 15.108a5.041 6.52 28.25 0 0-8.008-6.217 5.041 6.52 28.25 0 0 8.008 6.217A11.884 7.288-60.76 0 1 4.029 7.001M17 21h.01M7 3h.01" />
    <path d="M7.997 8.891a11.885 7.288-60.756 0 1 11.977 8.107" />
    <circle cx={12} cy={12} r={1} fill="currentColor" />
  </svg>
);
export default SvgGalaxy;
