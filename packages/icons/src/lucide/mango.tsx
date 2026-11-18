import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMango = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m17 6 3-3M7 22a4 4 0 0 1-2.62-7.023A2 2 0 0 0 5 13.383V10a8 8 0 1 1 16 0A12 12 0 0 1 9 22z" />
  </svg>
);
export default SvgMango;
