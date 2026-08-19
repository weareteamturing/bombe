import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMouseRight = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 7.318V10M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7" />
    <circle cx={17} cy={4} r={2} />
  </svg>
);
export default SvgMouseRight;
