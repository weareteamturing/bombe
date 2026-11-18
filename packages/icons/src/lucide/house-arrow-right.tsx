import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHouseArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12.353 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v2.344" />
    <path d="M14.87 12.508A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8M17.999 21l3-3h-6M20.999 18l-3-3" />
  </svg>
);
export default SvgHouseArrowRight;
