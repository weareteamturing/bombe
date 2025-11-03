import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPortraitArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.5 1A3.5 3.5 0 0 1 20 4.5v15a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 19.5v-15A3.5 3.5 0 0 1 7.5 1h9Zm-9 2.5a1 1 0 0 0-1 1v15l.005.102a1 1 0 0 0 .892.893l.103.005h9l.102-.005a1 1 0 0 0 .898-.995v-15a1 1 0 0 0-1-1h-9Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M11.368 5.208a.88.88 0 0 1 1.264 0l2.404 2.404a.922.922 0 0 1 .197.277c.05.112.07.23.07.355 0 .125-.02.243-.07.355-.05.11-.12.2-.197.277a.88.88 0 0 1-1.265 0l-.87-.87v7.988l.87-.87a.88.88 0 0 1 1.265 0 .922.922 0 0 1 .197.277c.05.111.07.23.07.354 0 .125-.02.244-.07.356-.05.11-.12.2-.197.277l-2.404 2.403a.88.88 0 0 1-1.264 0l-2.404-2.403a.88.88 0 0 1 0-1.265.88.88 0 0 1 1.266 0l.87.87V8.007l-.87.87a.88.88 0 0 1-1.266 0 .88.88 0 0 1 0-1.264l2.404-2.404Z"
    />
  </svg>
);
export default SvgPortraitArrow;
