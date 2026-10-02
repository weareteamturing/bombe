import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRotateCwClock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 7v5l4 2M16 8h5V3" />
    <path d="m21 8-2.3-2.3A9.7 9.7 0 0 0 12 3a9 9 0 1 0 9 9" />
  </svg>
);
export default SvgRotateCwClock;
