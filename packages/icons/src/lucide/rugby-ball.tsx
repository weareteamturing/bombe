import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRugbyBall = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m10 10 4 4M13 7l4 4M15.34 2.138A15 15 0 0 0 2.138 15.34c-.357 2.94.004 4.919.805 5.717.798.8 2.778 1.162 5.718.805A15 15 0 0 0 21.862 8.661c.357-2.94-.004-4.92-.805-5.718-.798-.8-2.778-1.162-5.717-.805M17 7 7 17M7 13l4 4" />
  </svg>
);
export default SvgRugbyBall;
