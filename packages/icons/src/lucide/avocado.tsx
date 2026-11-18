import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAvocado = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M13.465 3.464a5 5 0 0 1 7.07 0 5 5 0 0 1 0 7.072c-1.204 1.203-2.38 2.89-2.614 4.577A8 8 0 1 1 8.886 6.08c1.687-.235 3.375-1.41 4.579-2.615" />
    <circle cx={10} cy={14} r={3} />
  </svg>
);
export default SvgAvocado;
