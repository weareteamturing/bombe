import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEraserHighlighter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M20.999 11a1 1 0 0 0-.293-.707l-5.998-6a1 1 0 0 0-1.415 0L6.496 11.09l7.416 7.416 6.794-6.799A1 1 0 0 0 21 11ZM3 15a1 1 0 0 0 .227.634l.066.073 3.994 4 .073.066a.998.998 0 0 0 .637.227h4.422l.079-.08-7.417-7.416-1.788 1.789A1 1 0 0 0 3 15Zm19.999-4a3 3 0 0 1-.878 2.12L15.247 20H22a1 1 0 1 1 0 2H8a3.001 3.001 0 0 1-2.021-.778l-.107-.102-3.994-4a3 3 0 0 1 0-4.241l10-10 .107-.102a2.998 2.998 0 0 1 4.137.102l5.999 6A3 3 0 0 1 22.999 11Z"
    />
    <path fill="currentColor" d="M1 21a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z" />
  </svg>
);
export default SvgEraserHighlighter;
