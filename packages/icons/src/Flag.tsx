import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M5.611.747c.717 0 1.237.583 1.239 1.3v.621l.468.044c2.639.243 4.067.727 6.36 2.174s3.654 2.624 6.038 3.196l1.585.324c.459.087.65.608.096 1.042 0 0-1.111 1.151-2.596 1.84-1.485.687-2.795 1.184-5.123 1.01-2.328-.172-3.58-.022-4.957.592l-1.854.834.014 8.243c.001.71-.55 1.285-1.26 1.286-.713 0-1.319-.578-1.32-1.291L4.27 2.027C4.269 1.32 4.904.747 5.61.747Z"
    />
  </svg>
);
export default SvgFlag;
