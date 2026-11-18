import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRobotVacuum = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11 17h2M12 12h.01M17 12a5 5 0 0 0-10 0M19 2v2.8M2 5h2.8M22 5h-2.8M5 2v2.8" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgRobotVacuum;
