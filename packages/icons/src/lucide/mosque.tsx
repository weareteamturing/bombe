import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMosque = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12.268 2a2 2 0 0 0 3.465 2M14 5v3M16 22v-3a2 2 0 0 0-4 0v3M21 13c-.662-1.497-1.666-2.753-2.9-3.63C16.825 8.47 15.422 8 14 8s-2.826.47-4.1 1.37C8.668 10.248 7.663 11.504 7 13zM3 9h4" />
    <path d="M7 22V6a5 5 0 0 0-2-4 5 5 0 0 0-2 4v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
  </svg>
);
export default SvgMosque;
