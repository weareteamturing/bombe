import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.771 4.6a.95.95 0 0 1 0 1.899.95.95 0 0 1 0-1.899ZM3.5 6.649h8.33a3.146 3.146 0 0 0 2.941 2.05 3.146 3.146 0 0 0 2.94-2.05H20.5a1.1 1.1 0 1 0 0-2.2h-2.789a3.146 3.146 0 0 0-2.94-2.049 3.148 3.148 0 0 0-2.941 2.049H3.5a1.1 1.1 0 0 0 0 2.2Zm17 4.25h-17a1.1 1.1 0 0 0 0 2.2h17a1.1 1.1 0 1 0 0-2.2ZM9.229 19.4a.95.95 0 0 1 0-1.898.95.95 0 0 1 0 1.899M20.5 17.35h-8.33a3.147 3.147 0 0 0-2.941-2.05 3.146 3.146 0 0 0-2.94 2.05H3.5a1.1 1.1 0 0 0 0 2.2h2.789a3.146 3.146 0 0 0 2.94 2.05 3.148 3.148 0 0 0 2.941-2.05h8.33a1.1 1.1 0 1 0 0-2.2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilter;
