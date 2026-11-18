import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBriefcasePlus = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M13.354 20H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3.354" />
    <path d="M16 11.354V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M16 17h6M19 14v6" />
  </svg>
);
export default SvgBriefcasePlus;
