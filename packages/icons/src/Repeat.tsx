import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRepeat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M4.3 12.37v-1.01c0-2.79 2.27-5.06 5.06-5.06h7.59l-.56.56a1.202 1.202 0 0 0 1.7 1.7l2.61-2.61c.22-.23.35-.53.35-.85 0-.32-.13-.62-.35-.85l-2.61-2.61a1.201 1.201 0 1 0-1.7 1.7l.56.56H9.36c-4.11 0-7.46 3.35-7.46 7.46v1.01c0 .66.54 1.2 1.2 1.2.66 0 1.2-.53 1.2-1.2Zm16.6-1.94c-.66 0-1.2.54-1.2 1.2v1.01c0 2.79-2.27 5.06-5.06 5.06H7.05l.56-.56a1.202 1.202 0 0 0-1.7-1.7L3.3 18.05c-.23.22-.35.53-.35.85 0 .32.13.62.35.85l2.61 2.61a1.204 1.204 0 0 0 1.7 0c.47-.47.47-1.23 0-1.7l-.56-.56h7.59c4.11 0 7.46-3.35 7.46-7.46v-1.01c0-.67-.54-1.2-1.2-1.2Z"
    />
  </svg>
);
export default SvgRepeat;
