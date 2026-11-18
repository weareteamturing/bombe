import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLayerArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 10v10M22 10a1 1 0 0 1-.59.92l-5.077 2.308" />
    <path d="M22.017 10.005a1 1 0 0 0-.597-.916l-8.59-3.91a2 2 0 0 0-1.66.001L2.6 9.08a1 1 0 0 0-.02 1.831l5.093 2.316M9 17l3 3 3-3" />
  </svg>
);
export default SvgLayerArrowDown;
