import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCopyX = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2" />
    <rect width={14} height={14} x={8} y={8} rx={2} />
    <path d="m12.5 12.5 5 5M12.5 17.5l5-5" />
  </svg>
);
export default SvgCopyX;
