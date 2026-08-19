import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPrinterX = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377M16.5 16.5l5 5M16.5 21.5l5-5" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
  </svg>
);
export default SvgPrinterX;
