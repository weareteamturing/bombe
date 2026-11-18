import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChartQuadrant = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M13 3v18M3 12h18M3 3v16a2 2 0 0 0 2 2h16" />
    <circle cx={17.5} cy={5.5} r={0.5} fill="currentColor" />
    <circle cx={19.5} cy={16.5} r={0.5} fill="currentColor" />
    <circle cx={7.5} cy={16.5} r={0.5} fill="currentColor" />
    <circle cx={7.5} cy={7.5} r={0.5} fill="currentColor" />
  </svg>
);
export default SvgChartQuadrant;
