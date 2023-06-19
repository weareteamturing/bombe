import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 11.761c0 .033-.016.062-.019.094a.846.846 0 0 1-.041.199.964.964 0 0 1-.318.472c-.025.02-.04.049-.067.067l-4.726 3.15a1 1 0 0 1-1.109-1.664L11 11.226v-4.67a1 1 0 0 1 2 0v5.205ZM12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTime;
