import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMailX = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M22 12.532V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.792" />
    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7M16.5 16.5l5 5M21.5 16.5l-5 5" />
  </svg>
);
export default SvgMailX;
