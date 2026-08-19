import * as React from 'react';
import type { SVGProps } from 'react';
const SvgZodiacCapricorn = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0M7 19V6a3 3 0 0 0-3-3h0" />
    <circle cx={17} cy={17} r={3} />
  </svg>
);
export default SvgZodiacCapricorn;
