import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrailer = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 11.341V10M14 13v-3M18 17V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2" />
    <path d="M22 15v1a1 1 0 0 1-1 1H10M6 11.341V10" />
    <circle cx={8} cy={17} r={2} />
  </svg>
);
export default SvgTrailer;
