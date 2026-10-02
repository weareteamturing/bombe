import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCartonOff = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 10H5v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M13 22v-9M13.902 8.245 16 6h-4.343" />
    <path d="M19 13.343V10a2 2 0 0 0-.539-1.367L16 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-.857.486M2 2l20 20M7.034 7.034 5.539 8.633A2 2 0 0 0 5 10" />
  </svg>
);
export default SvgCartonOff;
