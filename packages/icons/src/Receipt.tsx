import * as React from 'react';
import { SVGProps } from 'react';
const SvgReceipt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18 13.3h-2.087l-.741 2.692a.998.998 0 0 1-.97.739.995.995 0 0 1-.969-.739L12 11.514l-1.232 4.478a.996.996 0 0 1-.969.739h-.001a.997.997 0 0 1-.97-.738L8.087 13.3H6a.8.8 0 0 1 0-1.6h1.646l-.665-2.419a.8.8 0 1 1 1.542-.424l1.275 4.629 1.232-4.478a.997.997 0 0 1 .97-.739c.458 0 .848.297.97.739l1.232 4.478 1.275-4.629a.8.8 0 1 1 1.543.424l-.666 2.419H18a.8.8 0 0 1 0 1.6Zm3-11.354H3a.9.9 0 1 0 0 1.8v17.1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-17.1a.9.9 0 0 0 0-1.8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgReceipt;
