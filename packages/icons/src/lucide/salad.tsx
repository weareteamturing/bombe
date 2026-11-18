import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSalad = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M19.496 12a2.5 2.5 0 0 0 .399-2.214A2 2 0 0 0 20.32 6.5 2 2 0 0 0 19 3a2 2 0 0 0-1.5.68 2 2 0 0 0-3.287.424 2.5 2.5 0 0 0-3.189 2.06A3 3 0 0 0 12 12l4-4M4 12a1 1 0 0 0-.99 1.133A9 9 0 0 0 12 21a9 9 0 0 0 8.99-7.867A1 1 0 0 0 20 12zM7 21h10" />
    <path d="M9.85 6.907A3.5 3.5 0 0 0 5.05 12" />
  </svg>
);
export default SvgSalad;
