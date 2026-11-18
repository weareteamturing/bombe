import * as React from 'react';
import type { SVGProps } from 'react';
const SvgParentheses = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8 21s-4-3-4-9 4-9 4-9M16 3s4 3 4 9-4 9-4 9" />
  </svg>
);
export default SvgParentheses;
