import * as React from 'react';
import type { SVGProps } from 'react';
const SvgOut = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.657 4.286A2.914 2.914 0 0 1 9.572 1.37H19a2.914 2.914 0 0 1 2.914 2.915v15.428A2.914 2.914 0 0 1 19 22.63H9.572a2.914 2.914 0 0 1-2.915-2.915v-2.143a1.2 1.2 0 0 1 2.4 0v2.143c0 .284.23.515.515.515H19c.284 0 .514-.23.514-.515V4.286A.514.514 0 0 0 19 3.77H9.572a.514.514 0 0 0-.515.515v2.143a1.2 1.2 0 0 1-2.4 0V4.286ZM12.83 12.2a1.2 1.2 0 0 0-1.2-1.2h-6.82l.874-1.019A1.2 1.2 0 0 0 3.86 8.419l-2.571 3a1.2 1.2 0 0 0 0 1.562l2.571 3a1.2 1.2 0 0 0 1.823-1.562L4.809 13.4h6.82a1.2 1.2 0 0 0 1.2-1.2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOut;
