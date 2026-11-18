import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRussianRuble = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6 11h8a4 4 0 0 0 0-8H9v18M6 15h8" />
  </svg>
);
export default SvgRussianRuble;
