import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDatabaseSearch = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M21 11.693V5M22 22l-1.875-1.875M3 12a9 3 0 0 0 8.697 2.998" />
    <path d="M3 5v14a9 3 0 0 0 9.28 2.999" />
    <circle cx={18} cy={18} r={3} />
    <ellipse cx={12} cy={5} rx={9} ry={3} />
  </svg>
);
export default SvgDatabaseSearch;
