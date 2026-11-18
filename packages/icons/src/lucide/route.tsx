import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRoute = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9 5h8.5a1 1 0 0 1 0 7h-11a1 1 0 0 0 0 7H15" />
    <circle cx={18} cy={19} r={3} />
    <circle cx={6} cy={5} r={3} />
  </svg>
);
export default SvgRoute;
