import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTicTacToe = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 2v20M21 16l-5 5M21 21l-5-5M22 12H2M8 3 3 8M8 8 3 3" />
    <circle cx={18.5} cy={5.5} r={2.5} />
    <circle cx={5.5} cy={18.5} r={2.5} />
  </svg>
);
export default SvgTicTacToe;
