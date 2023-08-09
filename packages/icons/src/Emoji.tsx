import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEmoji = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.003 6.792c0 2.029-1.24 3.673-2.772 3.673-1.53 0-2.772-1.644-2.772-3.673 0-2.028 1.241-3.672 2.772-3.672 1.531 0 2.772 1.644 2.772 3.672Zm-10.474 0c0 2.029-1.24 3.673-2.772 3.673-1.53 0-2.772-1.644-2.772-3.672 0-2.029 1.241-3.673 2.772-3.673 1.531 0 2.772 1.644 2.772 3.673Zm9.745 11.526a1.848 1.848 0 0 0-2.24-2.94c-4.238 3.229-8.449 1.372-10.01.056a1.848 1.848 0 1 0-2.381 2.828c2.34 1.97 8.52 4.713 14.63.056Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEmoji;
