import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBatteryFull = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 10v4M14 10v4M22 14v-4M6 10v4" />
    <rect width={16} height={12} x={2} y={6} rx={2} />
  </svg>
);
export default SvgBatteryFull;
