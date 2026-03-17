import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <g fill="currentColor" clipPath="url(#group_svg__a)">
      <path d="M4.5 18.5a1 1 0 0 1 1 1v.6h13v-.6a1 1 0 0 1 1-1h.6v-13h-.6l-.102-.005a1 1 0 0 1-.893-.892L18.5 4.5v-.6h-13v.6a1 1 0 0 1-.897.995L4.5 5.5h-.6v13h.6Zm-2.8 3.8h2.6v-2.6H1.7v2.6Zm18 0h2.6v-2.6h-2.6v2.6Zm-18-18h2.6V1.7H1.7v2.6Zm18 0h2.6V1.7h-2.6v2.6Zm2.2 14.2h.6a1 1 0 0 1 1 1v3a1 1 0 0 1-.898.995l-.102.005h-3l-.102-.005a1 1 0 0 1-.893-.893L18.5 22.5v-.6h-13v.6a1 1 0 0 1-.897.995L4.5 23.5h-3l-.103-.005a1 1 0 0 1-.892-.893L.5 22.5v-3a1 1 0 0 1 1-1h.6v-13h-.6l-.103-.005a1 1 0 0 1-.892-.892L.5 4.5v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v.6h13v-.6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-.898.995L22.5 5.5h-.6v13Z" />
      <path d="M9.725 6.5c-.477 0-.864.352-.864.786v.739h6.105c.477 0 .864.351.864.785v6.53h.806c.477 0 .864-.352.864-.786V7.286c0-.434-.387-.786-.864-.786H9.725Z" />
      <path d="M6.5 9.446c0-.434.387-.786.864-.786h6.911c.477 0 .864.352.864.786v7.268c0 .434-.387.786-.864.786H7.364c-.477 0-.864-.352-.864-.786V9.446Z" />
    </g>
    <defs>
      <clipPath id="group_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGroup;
