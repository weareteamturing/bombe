import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLetterP = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6 12h8a4 4 0 0 0 0-8H7a1 1 0 0 0-1 1v15" />
  </svg>
);
export default SvgLetterP;
