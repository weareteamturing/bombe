import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDoorStairwell = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 17v-3a1 1 0 0 1 1-1h6M19 17h-9a1 1 0 0 0-1 1v3" />
    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16" />
    <path d="M19 9h-3a1 1 0 0 0-1 1v3M22 21H2" />
  </svg>
);
export default SvgDoorStairwell;
