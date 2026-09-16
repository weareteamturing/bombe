import * as React from 'react';
import type { SVGProps } from 'react';
const SvgImageFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14Zm-1.086 9.914a2 2 0 0 0-2.828 0L7 20h12a1 1 0 0 0 1-1v-5l-2.086-2.086ZM9 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgImageFilled;
