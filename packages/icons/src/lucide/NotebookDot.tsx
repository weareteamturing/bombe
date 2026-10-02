import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNotebookDot = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 11.75V22M2 10h4M2 14h4M2 18h4M2 6h4M20 11.75V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5.65" />
    <circle cx={18} cy={5} r={3} />
  </svg>
);
export default SvgNotebookDot;
