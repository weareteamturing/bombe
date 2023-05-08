import * as React from 'react';
import { SVGProps } from 'react';
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.88 20.466V6.43l-5.451 5.451a1.2 1.2 0 1 1-1.697-1.697l7.5-7.5c.002-.003.006-.004.009-.007a1.2 1.2 0 0 1 1.298-.252c.143.06.271.145.38.252l.01.007 7.5 7.5c.234.234.351.541.351.848a1.2 1.2 0 0 1-2.048.849l-5.452-5.45v14.035a1.2 1.2 0 1 1-2.4 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUp;
