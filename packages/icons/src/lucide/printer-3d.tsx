import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPrinter3D = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 11v1M12 8h8M15 20v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3M4 20h16" />
    <path d="M4 22V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18M4 8h4" />
    <path d="M8.635 10.093A2 2 0 0 1 8 8.631V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-.293.707l-1 1a1 1 0 0 1-1.414 0z" />
  </svg>
);
export default SvgPrinter3D;
