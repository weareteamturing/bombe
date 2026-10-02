import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGapVertical = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 12h2M8 12h2M14 12h2M20 12h2M3 21v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3M3 3v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3" />
  </svg>
);
export default SvgGapVertical;
