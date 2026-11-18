import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircleLetterG = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12.5 12H15v2.268a.88.88 0 0 1-.263.65A4 4 0 1 1 12 8h2.5" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgCircleLetterG;
