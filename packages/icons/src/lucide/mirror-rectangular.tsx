import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMirrorRectangular = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11 6 8 9M16 7l-8 8" />
    <rect width={16} height={20} x={4} y={2} rx={2} />
  </svg>
);
export default SvgMirrorRectangular;
