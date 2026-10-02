import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDoorClosedLocked = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M19 8V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16M2 21h8M20 16v-2a2 2 0 0 0-4 0v2M9 12h.01" />
    <rect width={8} height={5} x={14} y={16} rx={1} />
  </svg>
);
export default SvgDoorClosedLocked;
