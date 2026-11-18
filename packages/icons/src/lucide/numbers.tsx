import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNumbers = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m10 4 2.6-1.95a.25.25 0 0 1 .4.2V10M16 14.535A4 4 0 0 1 18 14a2 2 0 0 1 0 4 2 2 0 0 1 0 4 4 4 0 0 1-2-.535M8 22H4.5a.5.5 0 0 1-.5-.5c0-2.68 4-2.932 4-5.5a2 2 0 0 0-2-2 2.5 2.5 0 0 0-2 1" />
  </svg>
);
export default SvgNumbers;
