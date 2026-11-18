import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShelvingUnit = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3M20 22V2M4 12h16M4 20h16M4 2v20M4 4h16" />
  </svg>
);
export default SvgShelvingUnit;
