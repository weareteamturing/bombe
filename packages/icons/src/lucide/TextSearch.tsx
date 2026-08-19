import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTextSearch = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M21 5H3M10 12H3M10 19H3" />
    <circle cx={17} cy={15} r={3} />
    <path d="m21 19-1.9-1.9" />
  </svg>
);
export default SvgTextSearch;
