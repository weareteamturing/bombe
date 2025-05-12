import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCameraColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#9C7EEF"
      fillRule="evenodd"
      d="M11.98 18.28a5.26 5.26 0 1 0 0-10.52 5.26 5.26 0 0 0 0 10.52ZM12 16.4a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72Z"
      clipRule="evenodd"
    />
    <circle cx={19.125} cy={8.625} r={1.125} fill="#9C7EEF" />
    <path
      fill="#D9CDF9"
      d="M9.628 10.648A3.359 3.359 0 0 1 12 9.664a3.359 3.359 0 0 1 3.355 3.356A3.358 3.358 0 0 1 12 16.376a3.358 3.358 0 0 1-3.355-3.356c0-.89.354-1.743.983-2.372Z"
    />
    <path
      fill="#D9CDF9"
      fillRule="evenodd"
      d="M17.159 5.136h2.954a2.52 2.52 0 0 1 2.521 2.52v11.601a2.52 2.52 0 0 1-2.521 2.52H3.887a2.522 2.522 0 0 1-2.521-2.52V7.656a2.52 2.52 0 0 1 2.521-2.52h2.954l1.036-2.129a2.1 2.1 0 0 1 1.888-1.18h4.413a2.1 2.1 0 0 1 1.868 1.14l1.113 2.169ZM8.292 16.729A5.252 5.252 0 0 0 12 18.267a5.252 5.252 0 0 0 5.246-5.246A5.252 5.252 0 0 0 12 7.774a5.252 5.252 0 0 0-5.246 5.247 5.252 5.252 0 0 0 1.538 3.708ZM19.125 9.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCameraColor;
