import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.868 10.8h14.036l-5.451-5.451a1.2 1.2 0 1 1 1.697-1.697l7.5 7.5c.003.002.004.006.007.009a1.2 1.2 0 0 1 .252 1.298 1.19 1.19 0 0 1-.252.38l-.008.01-7.5 7.5a1.196 1.196 0 0 1-.847.35 1.2 1.2 0 0 1-.849-2.048l5.45-5.451H3.869a1.2 1.2 0 1 1 0-2.4Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRight;
