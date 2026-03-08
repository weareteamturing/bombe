import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M20.197 12.546a.773.773 0 0 0 0-1.092l-7.65-7.651a.773.773 0 0 0-1.094 0l-7.65 7.65a.773.773 0 0 0 0 1.094l7.65 7.65a.773.773 0 0 0 1.094 0l7.65-7.65Zm-5.829 9.473a3.349 3.349 0 0 1-4.736 0L1.98 14.37a3.349 3.349 0 0 1 0-4.737L9.63 1.98a3.349 3.349 0 0 1 4.737 0l7.651 7.65a3.349 3.349 0 0 1 0 4.737l-7.65 7.651Z"
    />
  </svg>
);
export default SvgDiamond;
