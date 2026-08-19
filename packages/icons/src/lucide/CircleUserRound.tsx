import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircleUserRound = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17.925 20.056a6 6 0 0 0-11.851.001" />
    <circle cx={12} cy={11} r={4} />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgCircleUserRound;
