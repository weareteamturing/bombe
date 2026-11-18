import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGrid3X3Off = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 9.344V3M2 2l20 20M20.414 20.414A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .586-1.414M20.656 15H21M21 9h-6.344" />
    <path d="M3 15h12v6" />
    <path d="M3 9h6v12M8.656 3H19a2 2 0 0 1 2 2v10.343M9 3v.344" />
  </svg>
);
export default SvgGrid3X3Off;
