import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFaceAngry = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 11V9.416M17 9a5 5 0 0 0-3 1M7 9a5 5 0 0 1 3 1M9 11V9.416M9 16a5 5 0 0 1 6.001 0" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgFaceAngry;
