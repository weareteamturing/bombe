import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGapHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 2v2M12 8v2M12 14v2M12 20v2M21 3h-3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3M3 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3" />
  </svg>
);
export default SvgGapHorizontal;
