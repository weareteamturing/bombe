import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSpellCheck = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m20 15-5.5 5.5L12 18M4 16l6-12 5.115 10.23M6 12h8" />
  </svg>
);
export default SvgSpellCheck;
