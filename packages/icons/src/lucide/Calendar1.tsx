import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendar1 = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11 13h1v4M16 2v3M3 9h18M8 2v3" />
    <rect width={18} height={18} x={3} y={3} rx={2} />
  </svg>
);
export default SvgCalendar1;
