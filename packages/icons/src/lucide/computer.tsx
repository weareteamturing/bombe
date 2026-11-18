import * as React from 'react';
import type { SVGProps } from 'react';
const SvgComputer = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 18h6M6 18h.01M8 6h1" />
    <rect width={20} height={8} x={2} y={14} rx={2} />
    <rect width={16} height={12} x={4} y={2} rx={2} />
  </svg>
);
export default SvgComputer;
