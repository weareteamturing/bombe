import * as React from 'react';
import type { SVGProps } from 'react';
const SvgServerNas = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 16V8M14 16V8M18 16V8M6 12h.01M6 16h.01" />
    <rect width={20} height={16} x={2} y={4} rx={2} />
  </svg>
);
export default SvgServerNas;
