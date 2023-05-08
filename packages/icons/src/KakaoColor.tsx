import * as React from 'react';
import { SVGProps } from 'react';
const SvgKakaoColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="#FFEB2E" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z" />
    <path
      fill="#391B1B"
      fillRule="evenodd"
      d="M12.001 6.908c-3.074 0-5.566 1.97-5.566 4.4 0 1.582 1.056 2.968 2.64 3.744-.116.434-.42 1.575-.482 1.818-.075.303.111.299.233.217.096-.063 1.525-1.035 2.142-1.454.335.05.68.076 1.033.076 3.074 0 5.566-1.97 5.566-4.4 0-2.43-2.492-4.4-5.566-4.4Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgKakaoColor;
