import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGitPullRequestClosed = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m15.5 3.5 5 5M15.5 8.5l5-5M18 11.62V15M6 9v12" />
    <circle cx={18} cy={18} r={3} />
    <circle cx={6} cy={6} r={3} />
  </svg>
);
export default SvgGitPullRequestClosed;
