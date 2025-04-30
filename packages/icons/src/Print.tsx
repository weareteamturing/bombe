import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.59 7.43a1.92 1.92 0 0 1 1.91 1.91v6.68a1.91 1.91 0 0 1-1.91 1.91H17.8V20a2.2 2.2 0 0 1-2.2 2.2H8.4A2.2 2.2 0 0 1 6.2 20v-2.07H3.41a1.91 1.91 0 0 1-1.91-1.91V9.34a1.92 1.92 0 0 1 1.91-1.91h17.18ZM8.4 15a.2.2 0 0 0-.2.2V20c0 .11.09.2.2.2h7.2a.2.2 0 0 0 .2-.2v-4.8a.2.2 0 0 0-.2-.2H8.4Zm8.056-1.827a2.203 2.203 0 0 1-.201-.074l.201.074Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M16.8 2H7.2A1.2 1.2 0 0 0 6 3.2v2.4a1.2 1.2 0 0 0 1.2 1.2h9.6A1.2 1.2 0 0 0 18 5.6V3.2A1.2 1.2 0 0 0 16.8 2Z"
    />
  </svg>
);
export default SvgPrint;
