import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlignVerticalDistributeCenter = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M22 17h-3M22 7h-5M5 17H2M7 7H2" />
    <rect width={14} height={6} x={5} y={14} rx={2} />
    <rect width={10} height={6} x={7} y={4} rx={2} />
  </svg>
);
export default SvgAlignVerticalDistributeCenter;
