import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFileDatabase = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 12v8a5 2 0 0 1-10 0v-8" />
    <path d="M12 16a5 2 0 0 1-10 0M14 2v5a1 1 0 0 0 1 1h5" />
    <path d="M4 6.3V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-2.43" />
    <ellipse cx={7} cy={12} rx={5} ry={2} />
  </svg>
);
export default SvgFileDatabase;
