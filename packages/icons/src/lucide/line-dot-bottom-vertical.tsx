import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLineDotBottomVertical = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 3v12" />
    <circle cx={12} cy={18} r={3} />
  </svg>
);
export default SvgLineDotBottomVertical;
