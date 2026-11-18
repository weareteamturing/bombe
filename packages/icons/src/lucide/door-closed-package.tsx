import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDoorClosedPackage = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M18 13v3M19 9V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16M2 21h8M9 12h.01" />
    <rect width={8} height={8} x={14} y={13} rx={1} />
  </svg>
);
export default SvgDoorClosedPackage;
