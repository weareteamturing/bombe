import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 8h20" />
    <rect width={20} height={16} x={2} y={4} rx={2} />
    <path d="M6 16h12" />
  </svg>
);
export default SvgDock;
