import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGlobeBan = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 22a14.48 14.48 0 0 1-4.008-10C7.993 9.136 9 5.258 11 2.05A10 10 0 0 0 12 22M15.172 3.172l5.656 5.656M15.86 14a14.5 14.5 0 0 1-3.859 8 10 10 0 0 0 9.949-9M2 12h10.5" />
    <circle cx={18} cy={6} r={4} />
  </svg>
);
export default SvgGlobeBan;
