import * as React from 'react';
import type { SVGProps } from 'react';
const SvgZodiacCancer = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M21 14.5A9 6.5 0 0 1 5.5 19M3 9.5A9 6.5 0 0 1 18.5 5" />
    <circle cx={17.5} cy={14.5} r={3.5} />
    <circle cx={6.5} cy={9.5} r={3.5} />
  </svg>
);
export default SvgZodiacCancer;
