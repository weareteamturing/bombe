import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMirrorRound = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 6.6 8.6 8M12 18v4M15 7.5 9.5 13M7 22h10" />
    <circle cx={12} cy={10} r={8} />
  </svg>
);
export default SvgMirrorRound;
