import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendarRange = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={18} x={3} y={3} rx={2} />
    <path d="M16 2v3M3 9h18M8 2v3M17 13h-6M13 17H7M7 13h.01M17 17h.01" />
  </svg>
);
export default SvgCalendarRange;
