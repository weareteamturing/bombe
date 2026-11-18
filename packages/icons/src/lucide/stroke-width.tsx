import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStrokeWidth = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3.25 3h17.5" />
    <rect width={18} height={4} x={3} y={7} rx={1} />
    <rect width={18} height={6} x={3} y={15} rx={1} />
  </svg>
);
export default SvgStrokeWidth;
