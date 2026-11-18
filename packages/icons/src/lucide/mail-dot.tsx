import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMailDot = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12.674 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4.675" />
    <path d="m2 7 9 5.701a2 2 0 0 0 2 0l1.084-.686" />
    <circle cx={19} cy={7} r={3} />
  </svg>
);
export default SvgMailDot;
