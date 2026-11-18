import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronsToAxisVertical = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 2v20M21 8l-4 4 4 4M3 8l4 4-4 4" />
  </svg>
);
export default SvgChevronsToAxisVertical;
