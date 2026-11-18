import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlaskRound = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 2v6.292a7 7 0 1 0 4 0V2M5 15h14M8.5 2h7" />
  </svg>
);
export default SvgFlaskRound;
