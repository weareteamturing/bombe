import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSmartphoneUserRound = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M11 18h.01M22 22a4 4 0 0 0-8 0" />
    <circle cx={18} cy={15} r={3} />
  </svg>
);
export default SvgSmartphoneUserRound;
