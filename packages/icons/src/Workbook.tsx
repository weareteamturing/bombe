import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWorkbook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M3 3.046C3 2.192 3.692 1.5 4.546 1.5h1.16v20.875h-1.16A1.546 1.546 0 0 1 3 20.829V3.046Z"
    />
    <rect width={9.278} height={2.319} x={8.752} y={4.912} fill="currentColor" rx={1.16} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.01 22.375H5.705V1.5H20.01c.854 0 1.547.692 1.547 1.546V20.83c0 .854-.693 1.546-1.547 1.546ZM9.911 4.912a1.16 1.16 0 1 0 0 2.32h6.958a1.16 1.16 0 1 0 0-2.32H9.912Z"
      clipRule="evenodd"
      opacity={0.6}
    />
  </svg>
);
export default SvgWorkbook;
