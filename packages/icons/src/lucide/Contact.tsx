import * as React from 'react';
import type { SVGProps } from 'react';
const SvgContact = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 2v2M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M8 2v2" />
    <circle cx={12} cy={10} r={3} />
    <rect width={18} height={18} x={3} y={3} rx={2} />
  </svg>
);
export default SvgContact;
