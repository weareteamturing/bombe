import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWorkflow = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={8} height={8} x={3} y={3} rx={2} />
    <path d="M7 11v4a2 2 0 0 0 2 2h4" />
    <rect width={8} height={8} x={13} y={13} rx={2} />
  </svg>
);
export default SvgWorkflow;
