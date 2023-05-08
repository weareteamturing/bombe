import * as React from 'react';
import { SVGProps } from 'react';
const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.887 6.644a4.895 4.895 0 1 1-9.79.001 4.895 4.895 0 0 1 9.79-.001Zm-4.895 6.393c-7.049 0-9.791 4.486-9.791 6.573 0 2.086 5.837 2.642 9.791 2.642 3.954 0 9.791-.556 9.791-2.642 0-2.087-2.742-6.573-9.791-6.573Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProfile;
