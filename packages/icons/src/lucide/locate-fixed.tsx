import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLocateFixed = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 12h3M19 12h3M12 2v3M12 19v3" />
    <circle cx={12} cy={12} r={7} />
    <circle cx={12} cy={12} r={3} />
  </svg>
);
export default SvgLocateFixed;
