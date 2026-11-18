import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLetterQ = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={8} />
    <path d="m20 20-5-5" />
  </svg>
);
export default SvgLetterQ;
