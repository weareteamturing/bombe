import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircleLetterY = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m9 8 3 4 3-4M12 12v4" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgCircleLetterY;
