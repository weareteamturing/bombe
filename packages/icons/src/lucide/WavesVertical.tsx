import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWavesVertical = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 2q2 2.5 0 5t0 5 0 5 0 5M19 2q2 2.5 0 5t0 5 0 5 0 5M5 2q2 2.5 0 5t0 5 0 5 0 5" />
  </svg>
);
export default SvgWavesVertical;
