import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHighlighter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M7.328 7.5a3 3 0 0 1 .858-2.1L12.793.793a1 1 0 1 1 1.414 1.414L9.614 6.8l-.065.073A1 1 0 0 0 9.614 8.2l5.186 5.186a1.001 1.001 0 0 0 1.4 0l4.593-4.593a1 1 0 1 1 1.414 1.414L17.6 14.814a3 3 0 0 1-2.78.779l-2.613 2.614a1 1 0 0 1-.707.293h-9a1 1 0 0 1-1-1v-3a1 1 0 0 1 .293-.707l5.614-5.614a2.998 2.998 0 0 1-.079-.68ZM3.5 14.914V16.5h7.586l2-2L8.5 9.914l-5 5Z"
    />
    <path
      fill="currentColor"
      d="M22.5 22c0-.828-.522-1.5-1.167-1.5H2.667c-.645 0-1.167.672-1.167 1.5s.522 1.5 1.167 1.5h18.666c.645 0 1.167-.672 1.167-1.5Z"
      data-icon-slot="swatch"
    />
  </svg>
);
export default SvgHighlighter;
