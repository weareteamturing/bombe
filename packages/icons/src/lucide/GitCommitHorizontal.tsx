import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGitCommitHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={3} />
    <path d="M3 12h6M15 12h6" />
  </svg>
);
export default SvgGitCommitHorizontal;
