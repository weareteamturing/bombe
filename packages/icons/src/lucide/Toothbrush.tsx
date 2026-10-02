import * as React from 'react';
import type { SVGProps } from 'react';
const SvgToothbrush = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 11c-2 2-4 2-6 4l-7 7" />
    <path d="m22 4-7.414 7.414-2-2A2 2 0 0 1 14 6c0-.512.196-1.024.586-1.414A2 2 0 0 1 16 4a2 2 0 0 1 3.262-1.552l2.152 2.138" />
  </svg>
);
export default SvgToothbrush;
