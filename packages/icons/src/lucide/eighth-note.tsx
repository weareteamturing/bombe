import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEighthNote = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m19 6-5.2-3.9a.5.5 0 0 0-.8.4V18" />
    <circle cx={9} cy={18} r={4} />
  </svg>
);
export default SvgEighthNote;
