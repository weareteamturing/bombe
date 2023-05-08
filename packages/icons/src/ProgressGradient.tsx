import * as React from 'react';
import { SVGProps } from 'react';
const SvgProgressGradient = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 1.4a1.1 1.1 0 0 0-1.1 1.1v3.042a1.1 1.1 0 0 0 2.2 0V2.5A1.101 1.101 0 0 0 12 1.4Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.656 8.211a1.097 1.097 0 0 0 1.556 0 1.101 1.101 0 0 0 0-1.556L6.06 4.505A1.101 1.101 0 0 0 4.505 6.06l2.15 2.151h.001Z"
      clipRule="evenodd"
      opacity={0.16}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.642 12a1.1 1.1 0 0 0-1.1-1.1H2.5a1.1 1.1 0 0 0 0 2.2h3.042a1.1 1.1 0 0 0 1.1-1.1Z"
      clipRule="evenodd"
      opacity={0.32}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m6.656 15.789-2.151 2.15a1.101 1.101 0 0 0 1.556 1.556l2.15-2.15a1.101 1.101 0 0 0-1.555-1.556ZM12 17.358a1.1 1.1 0 0 0-1.1 1.1V21.5a1.1 1.1 0 0 0 2.2 0v-3.042a1.1 1.1 0 0 0-1.1-1.1Z"
      clipRule="evenodd"
      opacity={0.56}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.344 15.789a1.1 1.1 0 0 0-1.556 1.556l2.151 2.15a1.098 1.098 0 0 0 1.878-.778 1.1 1.1 0 0 0-.322-.778l-2.15-2.15h-.001ZM21.5 10.9h-3.042a1.1 1.1 0 0 0 0 2.2H21.5a1.1 1.1 0 0 0 0-2.2ZM16.566 8.534c.281 0 .563-.107.778-.322l2.151-2.151a1.1 1.1 0 0 0-1.556-1.556l-2.15 2.15a1.1 1.1 0 0 0 .777 1.879Z"
      clipRule="evenodd"
      opacity={0.72}
    />
  </svg>
);
export default SvgProgressGradient;
