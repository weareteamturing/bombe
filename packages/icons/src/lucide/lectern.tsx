import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLectern = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 13h4a2 2 0 0 0 1.901-1.38l1.057-4.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287L3.1 11.621A2 2 0 0 0 5.001 13h4" />
    <path d="M15 22V11a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11M18 22H6M18 6V3a1 1 0 0 0-1-1h-3" />
  </svg>
);
export default SvgLectern;
