import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFaucet = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10.083 5.428 5.57 4.083a2 2 0 1 0 .001 3.834l4.512-1.345M12 8v3M13.917 5.428l4.511-1.345a2 2 0 1 1 0 3.834l-4.51-1.345M18 17v-4.006M22 11v8M22 12h-3a1 1 0 0 0-1 .994h-2.539a4 4 0 0 0-6.915-.012L7 13a5 5 0 0 0-5 5v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a1 1 0 0 1 .995-1l1.552.018a4 4 0 0 0 6.907 0L18 17a1 1 0 0 0 1 1h3" />
    <circle cx={12} cy={6} r={2} />
  </svg>
);
export default SvgFaucet;
