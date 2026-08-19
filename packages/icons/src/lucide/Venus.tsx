import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVenus = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 15v7M9 19h6" />
    <circle cx={12} cy={9} r={6} />
  </svg>
);
export default SvgVenus;
