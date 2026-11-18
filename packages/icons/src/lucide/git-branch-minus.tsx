import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGitBranchMinus = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 6a9 9 0 0 0-9 9V3M21 18h-6" />
    <circle cx={18} cy={6} r={3} />
    <circle cx={6} cy={18} r={3} />
  </svg>
);
export default SvgGitBranchMinus;
