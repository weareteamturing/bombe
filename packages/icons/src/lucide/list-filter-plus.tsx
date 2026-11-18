import * as React from 'react';
import type { SVGProps } from 'react';
const SvgListFilterPlus = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 5H2M6 12h12M9 19h6M16 5h6M19 8V2" />
  </svg>
);
export default SvgListFilterPlus;
