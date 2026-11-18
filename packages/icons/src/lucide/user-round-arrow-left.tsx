import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserRoundArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m19 16-3 3M2 21a8 8 0 0 1 12.664-6.5M22 19h-6l3 3" />
    <circle cx={10} cy={8} r={5} />
  </svg>
);
export default SvgUserRoundArrowLeft;
