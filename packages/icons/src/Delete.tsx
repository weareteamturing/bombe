import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.414 3.5A2 2 0 0 0 8 4.086l-6.5 6.5a2 2 0 0 0 0 2.828l6.5 6.5a2 2 0 0 0 1.414.586H21.5a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2H9.414Zm0 2H21.5v13H9.414l-6.5-6.5 6.5-6.5Zm8.157 2.643a.91.91 0 0 1 1.286 1.286L16.286 12l2.571 2.571a.909.909 0 1 1-1.286 1.286L15 13.286l-2.571 2.571a.909.909 0 1 1-1.286-1.286L13.714 12l-2.571-2.571a.909.909 0 1 1 1.286-1.286L15 10.714l2.571-2.571Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDelete;
