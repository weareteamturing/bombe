import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMarginVertical = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={6} height={6} x={9} y={9} rx={1} />
    <path d="M3 21h18M3 3h18" />
  </svg>
);
export default SvgMarginVertical;
