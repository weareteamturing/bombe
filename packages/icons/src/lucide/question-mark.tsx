import * as React from 'react';
import type { SVGProps } from 'react';
const SvgQuestionMark = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 15c0-2.48 5-2.99 5-6.5a5 4.5 0 0 0-10 0M12 20h.01" />
  </svg>
);
export default SvgQuestionMark;
