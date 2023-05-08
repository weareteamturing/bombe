import * as React from 'react';
import { SVGProps } from 'react';
const SvgCorrect = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path stroke="currentColor" strokeWidth={2.4} d="M2.7 12a9.3 9.3 0 1 1 18.6 0 9.3 9.3 0 0 1-18.6 0Z" />
  </svg>
);
export default SvgCorrect;
