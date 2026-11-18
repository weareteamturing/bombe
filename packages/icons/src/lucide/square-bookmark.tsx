import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSquareBookmark = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11 3v7.751a.25.25 0 0 0 .407.195l2.28-1.834a.5.5 0 0 1 .627 0l2.28 1.834a.25.25 0 0 0 .406-.195V3" />
    <rect width={18} height={18} x={3} y={3} rx={2} />
  </svg>
);
export default SvgSquareBookmark;
