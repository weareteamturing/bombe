import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircleLetterT = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 16V8M9 8h6" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgCircleLetterT;
