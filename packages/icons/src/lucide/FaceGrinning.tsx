import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFaceGrinning = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 10V9M7.084 14.302a5.12 5.12 0 0 0 9.833 0 .24.24 0 0 0-.235-.302H7.32a.24.24 0 0 0-.235.302M9 10V9" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgFaceGrinning;
