import * as React from 'react';
import { SVGProps } from 'react';
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.121 8.625a1.346 1.346 0 0 1-.396.954l-6.75 6.75a1.35 1.35 0 0 1-1.91 0l-6.75-6.75a1.35 1.35 0 1 1 1.91-1.908l5.796 5.794 5.795-5.794a1.35 1.35 0 0 1 2.305.954Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronDown;
