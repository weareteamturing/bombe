import * as React from 'react';
import type { SVGProps } from 'react';
const SvgToggleLeft = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={9} cy={12} r={3} />
    <rect width={20} height={14} x={2} y={5} rx={7} />
  </svg>
);
export default SvgToggleLeft;
