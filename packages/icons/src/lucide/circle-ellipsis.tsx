import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircleEllipsis = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={10} />
    <path d="M17 12h.01M12 12h.01M7 12h.01" />
  </svg>
);
export default SvgCircleEllipsis;
