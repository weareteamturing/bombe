import * as React from 'react';
import { SVGProps } from 'react';
const SvgCrown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.352 20a1.05 1.05 0 0 1-1.032-.945L2.008 7.415c-.118-1.044 1.146-1.617 1.815-.823l3.891 4.62 2.877-6.292a1.539 1.539 0 0 1 2.818 0l2.877 6.292 3.89-4.62c.67-.794 1.934-.221 1.816.823l-1.313 11.64a1.05 1.05 0 0 1-1.03.945H4.351Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCrown;
