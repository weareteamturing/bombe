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
    <path d="M15 12v-1.584M17 10a5 5 0 0 0-3 1M7 10a5 5 0 0 1 3 1M9 12v-1.584M9 17a5 5 0 0 1 6.001 0" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgFaceAngry;
