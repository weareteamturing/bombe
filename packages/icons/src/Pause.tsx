import * as React from 'react';
import { SVGProps } from 'react';
const SvgPause = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.085 3.4C5.32 3.4 4.7 3.99 4.7 4.719v14.505c0 .729.62 1.319 1.385 1.319h3.23c.765 0 1.385-.59 1.385-1.319V4.72c0-.729-.62-1.319-1.384-1.319H6.085Zm8.571 0c-.764 0-1.384.59-1.384 1.319v14.505c0 .729.62 1.319 1.384 1.319h3.231c.765 0 1.385-.59 1.385-1.319V4.72c0-.729-.62-1.319-1.385-1.319h-3.23Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPause;
