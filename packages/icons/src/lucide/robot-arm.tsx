import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRobotArm = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 21 7.5 8.322M14 7l1.75-3.767a.5.5 0 0 1 .662-.172L20 5.005M20 8.998l-3.588 1.944a.5.5 0 0 1-.662-.172L14 7H8M3.486 21h10M5 21V8.732" />
    <circle cx={6} cy={7} r={2} />
  </svg>
);
export default SvgRobotArm;
