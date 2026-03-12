import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowElbow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M16.153 2.765a1.09 1.09 0 0 1 1.543.119l2.92 3.425c.512.6.512 1.484 0 2.083l-2.92 3.425a1.09 1.09 0 0 1-1.543.12 1.104 1.104 0 0 1-.119-1.552l1.61-1.888h-3.848c-.632 0-1.145.516-1.145 1.151v8.502c0 1.85-1.492 3.35-3.333 3.35H4.094A1.097 1.097 0 0 1 3 20.4c0-.607.49-1.1 1.094-1.1h5.224c.632 0 1.145-.515 1.145-1.15V9.648c0-1.85 1.492-3.35 3.333-3.35h3.928l-1.69-1.982a1.104 1.104 0 0 1 .119-1.551Z"
    />
  </svg>
);
export default SvgArrowElbow;
