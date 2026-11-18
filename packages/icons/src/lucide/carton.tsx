import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCarton = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M13 22V10a2 2 0 0 1 .539-1.367L16 6H8L5.539 8.633A2 2 0 0 0 5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-.539-1.367L16 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3M5 10h8" />
  </svg>
);
export default SvgCarton;
