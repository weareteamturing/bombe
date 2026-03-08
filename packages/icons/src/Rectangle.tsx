import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M19.857 4.857a.714.714 0 0 0-.714-.714H4.857a.714.714 0 0 0-.714.714v14.286c0 .394.32.714.714.714h14.286c.394 0 .714-.32.714-.714V4.857ZM22 19.143A2.857 2.857 0 0 1 19.143 22H4.857A2.857 2.857 0 0 1 2 19.143V4.857A2.857 2.857 0 0 1 4.857 2h14.286A2.857 2.857 0 0 1 22 4.857v14.286Z"
    />
  </svg>
);
export default SvgRectangle;
