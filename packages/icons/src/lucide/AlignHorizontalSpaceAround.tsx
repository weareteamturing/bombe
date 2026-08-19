import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAlignHorizontalSpaceAround = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={6} height={10} x={9} y={7} rx={2} />
    <path d="M4 22V2M20 22V2" />
  </svg>
);
export default SvgAlignHorizontalSpaceAround;
