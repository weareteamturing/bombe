import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLens = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15.725 7.296h.01M6 12a6 6 0 0 1 6-6" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgLens;
