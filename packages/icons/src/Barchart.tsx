import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBarchart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M14 2h5c.6 0 1 .4 1 1v18c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1ZM5 12h5c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1Z"
    />
  </svg>
);
export default SvgBarchart;
