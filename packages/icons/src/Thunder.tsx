import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThunder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m19.031 10.934-4.673-1.632L15.77 2.33c.227-1.124-1.16-1.841-1.945-1.007l-9.31 9.888a1.139 1.139 0 0 0 .453 1.856l4.672 1.632-1.41 6.972c-.229 1.123 1.158 1.84 1.944 1.007l9.311-9.89c.565-.6.324-1.583-.454-1.854Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgThunder;
