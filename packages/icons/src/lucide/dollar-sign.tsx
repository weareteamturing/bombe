import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDollarSign = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 3v18M17 5H9.5a1 1 0 0 0 0 7h5a1 1 0 0 1 0 7H6" />
  </svg>
);
export default SvgDollarSign;
