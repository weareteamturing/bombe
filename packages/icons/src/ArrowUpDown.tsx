import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.236 3.946v13.442l-2.494-2.494a1.101 1.101 0 0 0-1.555 1.556l4.372 4.371a1.091 1.091 0 0 0 1.556 0l4.37-4.37a1.101 1.101 0 1 0-1.555-1.557l-2.494 2.494V3.946a1.1 1.1 0 0 0-2.2 0ZM7.753 20.044V6.602l2.494 2.493a1.1 1.1 0 0 0 1.555-1.556l-4.37-4.372a1.096 1.096 0 0 0-1.557 0L1.503 7.54A1.1 1.1 0 1 0 3.06 9.095l2.494-2.494v13.442a1.1 1.1 0 1 0 2.2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUpDown;
