import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStrokeLineCapButt = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14 12h2M2 12h2M2 4h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2M20 12h2M8 12h2" />
  </svg>
);
export default SvgStrokeLineCapButt;
