import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.904 21.306c.666.44 1.525.44 2.19 0 2.115-1.396 6.72-4.733 8.704-8.467C24.413 7.913 21.342 3 17.282 3c-2.314 0-3.706 1.209-4.476 2.248a.998.998 0 0 1-1.613 0C10.423 4.209 9.031 3 6.717 3c-4.06 0-7.131 4.913-4.515 9.839 1.982 3.734 6.589 7.071 8.702 8.467Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeart;
