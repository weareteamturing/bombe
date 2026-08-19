import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLayersArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 12V2M2 17.002a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 .59-.92" />
    <path d="M7.674 8.774 2.58 11.09a1 1 0 0 0 0 1.822l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 .59-.92 1 1 0 0 0-.59-.922l-5.078-2.308M9 5l3-3 3 3" />
  </svg>
);
export default SvgLayersArrowUp;
