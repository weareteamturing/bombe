import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBotCheck = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 8V4H8M15 13v2M16 19l2 2 4-4M2 14h2M20 13.5V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6M9 13v2" />
  </svg>
);
export default SvgBotCheck;
