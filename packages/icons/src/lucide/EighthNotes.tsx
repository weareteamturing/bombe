import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEighthNotes = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19" />
    <circle cx={18} cy={16} r={3} />
    <circle cx={6} cy={19} r={3} />
  </svg>
);
export default SvgEighthNotes;
