import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGitMergeConflict = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 6h4a2 2 0 0 1 2 2v7M6 12v9M9 3 3 9M9 9 3 3" />
    <circle cx={18} cy={18} r={3} />
  </svg>
);
export default SvgGitMergeConflict;
