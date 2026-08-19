import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBandage = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 10.01h.01M10 14.01h.01M14 10.01h.01M14 14.01h.01M18 6v12M6 6v12" />
    <rect width={20} height={12} x={2} y={6} rx={2} />
  </svg>
);
export default SvgBandage;
