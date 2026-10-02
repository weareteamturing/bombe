import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMonitorPc = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 15H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6M10 19H5M14 11h8M14 7h8M18 17h.01M9 19v-4" />
    <rect width={8} height={18} x={14} y={3} rx={1} />
  </svg>
);
export default SvgMonitorPc;
