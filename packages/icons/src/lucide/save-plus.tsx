import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSavePlus = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V12" />
    <path d="M16 13H8a1 1 0 0 0-1 1v7M19 22v-6M22 19h-6M7 3v4a1 1 0 0 0 1 1h7" />
  </svg>
);
export default SvgSavePlus;
