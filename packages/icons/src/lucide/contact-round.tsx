import * as React from 'react';
import type { SVGProps } from 'react';
const SvgContactRound = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 2v2M17.915 21a6 6 0 1 0-12 0M8 2v2" />
    <circle cx={12} cy={11} r={4} />
    <rect width={18} height={18} x={3} y={3} rx={2} />
  </svg>
);
export default SvgContactRound;
