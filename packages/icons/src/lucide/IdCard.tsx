import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIdCard = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M13 19a4 4 0 0 0-8 0M16 10h2M16 14h2" />
    <circle cx={9} cy={12} r={3} />
    <rect width={20} height={14} x={2} y={5} rx={2} />
  </svg>
);
export default SvgIdCard;
