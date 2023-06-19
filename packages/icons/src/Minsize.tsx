import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMinsize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.3 9.2V6.8H6c.4 0 .8-.4.8-.8V2.2h2.4V6c0 1.8-1.4 3.2-3.2 3.2H2.3Zm12.53-6.95h2.4v3.7c0 .4.4.8.8.8h3.8v2.4h-3.8c-1.8 0-3.2-1.4-3.2-3.2v-3.7ZM6.8 21.8h2.4v-3.7c0-1.8-1.4-3.2-3.2-3.2H2.2v2.4H6c.4 0 .8.4.8.8v3.7Zm14.93-7v2.4h-3.7c-.4 0-.8.4-.8.8v3.8h-2.4V18c0-1.8 1.4-3.2 3.2-3.2h3.7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMinsize;
