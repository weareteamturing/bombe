import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserGroup = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17 21v-1a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1M19 10h1a2 2 0 0 1 2 2v1M5 10H4a2 2 0 0 0-2 2v1" />
    <circle cx={12} cy={11} r={3} />
    <circle cx={18} cy={4} r={2} />
    <circle cx={6} cy={4} r={2} />
  </svg>
);
export default SvgUserGroup;
