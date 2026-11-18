import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDatabaseArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m16 19 3 3 3-3M19 16v6M21 12.536V5M3 12a9 3 0 0 0 12.182 2.806" />
    <path d="M3 5v14a9 3 0 0 0 10.318 2.968" />
    <ellipse cx={12} cy={5} rx={9} ry={3} />
  </svg>
);
export default SvgDatabaseArrowDown;
