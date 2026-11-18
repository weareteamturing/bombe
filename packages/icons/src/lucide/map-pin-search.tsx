import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMapPinSearch = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12.248 21.969a1 1 0 0 1-.849-.17C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0c0 .42-.039.841-.112 1.262M22 22l-1.88-1.88" />
    <circle cx={12} cy={10} r={3} />
    <circle cx={18} cy={18} r={3} />
  </svg>
);
export default SvgMapPinSearch;
