import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowLeftLimit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 12a2.25 2.25 0 0 0 1.12 1.963l11.52 6.73c1.493.872 3.36-.218 3.36-1.963V5.27c0-1.745-1.867-2.835-3.36-1.963l-11.52 6.73A2.25 2.25 0 0 0 7 12ZM2.385 3C1.62 3 1 3.62 1 4.385v15.23C1 20.38 1.62 21 2.385 21h3.23C6.38 21 7 20.38 7 19.615V4.385C7 3.62 6.38 3 5.615 3h-3.23Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLeftLimit;
