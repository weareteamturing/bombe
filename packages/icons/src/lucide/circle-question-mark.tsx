import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircleQuestionMark = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={10} />
    <path d="M9 9.5a3 2.5 0 0 1 6 0c0 2-2 2-3 3.5M12 17h.01" />
  </svg>
);
export default SvgCircleQuestionMark;
