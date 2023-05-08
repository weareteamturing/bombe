import * as React from 'react';
import { SVGProps } from 'react';
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 18.879a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm-1-9.983a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-5Zm11.914 9.607L14.079 3.2c-.924-1.6-3.234-1.6-4.158 0L1.086 18.503c-.923 1.6.23 3.6 2.079 3.6h17.67c1.848 0 3.002-2 2.079-3.6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWarning;
