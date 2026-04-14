import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M9.86 1.886a3.026 3.026 0 0 1 4.28 0l7.974 7.974a3.026 3.026 0 0 1 0 4.28l-7.974 7.974a3.026 3.026 0 0 1-4.28 0L1.886 14.14a3.026 3.026 0 0 1 0-4.28L9.86 1.886Zm2.761 1.518a.88.88 0 0 0-1.242 0L3.404 11.38a.88.88 0 0 0 0 1.242l7.975 7.975a.88.88 0 0 0 1.242 0l7.975-7.975a.88.88 0 0 0 0-1.242L12.62 3.404Z"
    />
  </svg>
);
export default SvgDiamond;
