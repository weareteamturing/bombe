import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGlobePlus = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15.929 10.563A14.5 14.5 0 0 1 12 22a1 1 0 0 1 0-20 15 15 0 0 1 .68.768M19 2v6" />
    <path d="M21.92 10.734A10 10 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 0 1 1.266.08M22 12H2M22 5h-6" />
  </svg>
);
export default SvgGlobePlus;
