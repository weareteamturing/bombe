import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGraphHub = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={7} r={4} />
    <circle cx={4} cy={19} r={2} />
    <circle cx={12} cy={19} r={2} />
    <circle cx={20} cy={19} r={2} />
    <path d="M8 7a4 4 0 0 0-4 4v6M12 11v6M16 7a4 4 0 0 1 4 4v6" />
  </svg>
);
export default SvgGraphHub;
