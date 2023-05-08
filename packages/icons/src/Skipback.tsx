import * as React from 'react';
import { SVGProps } from 'react';
const SvgSkipback = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.05 2.5a.75.75 0 1 1 1.5 0v1.663a10.15 10.15 0 1 1-3.678 8.511c-.03-.46.346-.826.795-.826.453 0 .808.367.841.805A8.516 8.516 0 1 0 6.68 5.35H8.4a.75.75 0 0 1 0 1.5H4.8a.75.75 0 0 1-.75-.75V2.5Zm12.24 9.406c0 1.86-.86 2.906-2.274 2.906-1.418 0-2.274-1.054-2.274-2.906 0-1.847.863-2.906 2.274-2.906 1.41 0 2.273 1.059 2.273 2.906Zm-2.274-1.945c-.653.004-1.07.652-1.07 1.945-.008 1.305.413 1.938 1.07 1.938.656 0 1.074-.633 1.07-1.938.004-1.293-.418-1.941-1.07-1.945Zm-4.618-.883h1.11v5.656h-1.18v-4.539h-.031L8 11.008v-1.04l1.398-.89Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSkipback;
