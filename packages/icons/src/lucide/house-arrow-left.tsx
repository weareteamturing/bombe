import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHouseArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12.343 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.527l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10.001v2.354M18 15l-3 3" />
    <path d="M21 18h-6l3 3M9 21v-8a1 1 0 0 1 1-.999h4a1 1 0 0 1 .857.485" />
  </svg>
);
export default SvgHouseArrowLeft;
