import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLambda = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11.38 10 5 20M19 18a2 2 0 0 1-2 2c-4.87-.003-5.052-16-10-16a2 2 0 0 0-2 2" />
  </svg>
);
export default SvgLambda;
