import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVoteColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="#F3F4F6" d="M2 8h20v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8Z" />
    <path stroke="#F22735" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9 14.75 1.8 1.75L15 13" />
    <path fill="#E5E7EB" d="M3.256 3.719A1 1 0 0 1 4.216 3h15.569a1 1 0 0 1 .96.719L22 8H2l1.256-4.281Z" />
  </svg>
);
export default SvgVoteColor;
