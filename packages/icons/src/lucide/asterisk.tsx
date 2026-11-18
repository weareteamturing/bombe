import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAsterisk = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 5v14M18.065 8.496l-12.125 7M5.94 8.504l12.125 7" />
  </svg>
);
export default SvgAsterisk;
