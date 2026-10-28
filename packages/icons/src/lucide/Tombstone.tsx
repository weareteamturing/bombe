import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTombstone = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11 10h2M19 21V10a7 7 0 0 0-14 0v11M2 21h20M9 14h6" />
  </svg>
);
export default SvgTombstone;
