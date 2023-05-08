import * as React from 'react';
import { SVGProps } from 'react';
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m13.695 12 5.651-5.651a1.2 1.2 0 1 0-1.697-1.698L12 10.303 6.345 4.651A1.201 1.201 0 0 0 4.65 6.349L10.301 12 4.65 17.651A1.202 1.202 0 0 0 5.5 19.7c.306 0 .613-.117.847-.351l5.652-5.652 5.651 5.652a1.197 1.197 0 0 0 1.697 0 1.2 1.2 0 0 0 0-1.698L13.696 12Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClose;
