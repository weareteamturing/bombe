import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircleDivide = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8 12h8M12 16h0M12 8h0" />
  </svg>
);
export default SvgCircleDivide;
