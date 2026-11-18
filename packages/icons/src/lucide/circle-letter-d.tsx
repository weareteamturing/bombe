import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircleLetterD = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 8a4 4 0 0 1 0 8H9.412A.41.41 0 0 1 9 15.588V8.412A.41.41 0 0 1 9.412 8z" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgCircleLetterD;
