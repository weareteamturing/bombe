import * as React from 'react';
import { SVGProps } from 'react';
const SvgThumbup = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.904 10.205A1.904 1.904 0 0 0 2 12.109v7.987c0 1.052.852 1.905 1.904 1.905h1.93V10.205h-1.93Zm15.459-2.207h-4.542V3.737a1.736 1.736 0 0 0-3.24-.868l-4.236 7.336h-.011v11.796h9.234a3.81 3.81 0 0 0 3.698-2.896l1.87-7.564a2.856 2.856 0 0 0-2.773-3.543Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgThumbup;
