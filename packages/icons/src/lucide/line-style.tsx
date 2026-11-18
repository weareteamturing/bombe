import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLineStyle = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11 5h2M15 12h6M19 5h2M3 12h6M3 19h18M3 5h2" />
  </svg>
);
export default SvgLineStyle;
