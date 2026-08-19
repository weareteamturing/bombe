import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSquareScissors = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m17 17-2.18-2.18M9.56 14.44 17 7M9.56 9.56 12 12" />
    <circle cx={8.5} cy={15.5} r={1.5} />
    <circle cx={8.5} cy={8.5} r={1.5} />
    <rect width={18} height={18} x={3} y={3} rx={2} />
  </svg>
);
export default SvgSquareScissors;
