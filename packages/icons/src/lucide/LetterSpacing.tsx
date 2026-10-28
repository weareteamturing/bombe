import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLetterSpacing = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 14H9M21 3v18M3 3v18M8 16l3.453-7.648a.6.6 0 0 1 1.094.001L16 16" />
  </svg>
);
export default SvgLetterSpacing;
