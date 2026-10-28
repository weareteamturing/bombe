import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUsersCollaboration = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12.925 3.047a9 9 0 0 1 7.616 6.11M13 22a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2M3 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2M3.889 15.9a9 9 0 0 0 5.247 4.632" />
    <circle cx={17} cy={14} r={2} />
    <circle cx={7} cy={4} r={2} />
  </svg>
);
export default SvgUsersCollaboration;
