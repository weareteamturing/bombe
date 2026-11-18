import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVectorSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17.055 4.533a24 24 0 0 0-10.11 0M19.467 17.055a24 24 0 0 0 0-10.11M4.533 6.945a24 24 0 0 0 0 10.11M6.945 19.467a24 24 0 0 0 10.11 0" />
    <circle cx={19} cy={19} r={2} />
    <circle cx={19} cy={5} r={2} />
    <circle cx={5} cy={19} r={2} />
    <circle cx={5} cy={5} r={2} />
  </svg>
);
export default SvgVectorSquare;
