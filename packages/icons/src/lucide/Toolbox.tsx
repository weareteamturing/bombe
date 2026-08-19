import * as React from 'react';
import type { SVGProps } from 'react';
const SvgToolbox = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 12v4M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M17 6a2 2 0 0 1 1.414.586l3 3A2 2 0 0 1 22 11v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 .586-1.414l3-3A2 2 0 0 1 7 6zM2 14h20M8 12v4" />
  </svg>
);
export default SvgToolbox;
