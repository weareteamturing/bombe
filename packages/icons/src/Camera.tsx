import * as React from 'react';
import { SVGProps } from 'react';
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 18.267a5.252 5.252 0 0 1-5.246-5.246A5.252 5.252 0 0 1 12 7.774a5.252 5.252 0 0 1 5.246 5.247A5.252 5.252 0 0 1 12 18.267Zm8.113-13.131h-2.954l-1.113-2.169a2.1 2.1 0 0 0-1.868-1.14H9.765a2.1 2.1 0 0 0-1.888 1.18L6.841 5.136H3.887a2.52 2.52 0 0 0-2.521 2.52v11.601a2.52 2.52 0 0 0 2.521 2.52h16.226a2.519 2.519 0 0 0 2.521-2.52V7.656a2.52 2.52 0 0 0-2.521-2.52Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 9.664a3.359 3.359 0 0 0-3.355 3.356A3.358 3.358 0 0 0 12 16.376a3.358 3.358 0 0 0 3.355-3.356A3.36 3.36 0 0 0 12 9.664Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCamera;
