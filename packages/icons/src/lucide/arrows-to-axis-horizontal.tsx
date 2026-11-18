import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowsToAxisHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 22v-6M12 8V2M15 19l-3-3-3 3M15 5l-3 3-3-3M22 12H2" />
  </svg>
);
export default SvgArrowsToAxisHorizontal;
