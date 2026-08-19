import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={14} height={20} x={5} y={2} rx={7} />
    <path d="M12 6v4" />
  </svg>
);
export default SvgMouse;
