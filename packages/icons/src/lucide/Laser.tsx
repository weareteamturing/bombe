import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLaser = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m13 8 .95-.95M13.95 16.95 13 16M22 12h-9M4 12H2M4.05 16.95 5 16M5 8l-.95-.95M9 12h.01M9 19v-2M9 7V5" />
  </svg>
);
export default SvgLaser;
