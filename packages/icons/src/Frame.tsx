import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M2 6.3a1.2 1.2 0 0 1 1.2-1.2h17.6a1.2 1.2 0 0 1 0 2.4H3.2A1.2 1.2 0 0 1 2 6.3ZM2 17.7a1.2 1.2 0 0 1 1.2-1.2h17.6a1.2 1.2 0 0 1 0 2.4H3.2A1.2 1.2 0 0 1 2 17.7Z"
    />
    <path
      fill="currentColor"
      d="M17.7 2a1.2 1.2 0 0 1 1.2 1.2v17.6a1.2 1.2 0 0 1-2.4 0V3.2A1.2 1.2 0 0 1 17.7 2ZM6.3 2a1.2 1.2 0 0 1 1.2 1.2v17.6a1.2 1.2 0 0 1-2.4 0V3.2A1.2 1.2 0 0 1 6.3 2Z"
    />
  </svg>
);
export default SvgFrame;
