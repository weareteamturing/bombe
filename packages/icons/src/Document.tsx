import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDocument = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.5 2h-15a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1H13v-5c0-1.378 1.122-2.5 2.5-2.5h5V3a1 1 0 0 0-1-1Z"
      clipRule="evenodd"
    />
    <path fill="currentColor" fillRule="evenodd" d="M14.5 17v5l6-6h-5a1 1 0 0 0-1 1Z" clipRule="evenodd" />
  </svg>
);
export default SvgDocument;
