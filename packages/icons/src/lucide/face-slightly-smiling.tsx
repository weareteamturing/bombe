import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFaceSlightlySmiling = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 10V9M16.472 15a6 6 0 0 1-8.943 0M9 10V9" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgFaceSlightlySmiling;
