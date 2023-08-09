import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.566 2.83h2.154a1.882 1.882 0 1 1 2.45 2.45v2.154a1.882 1.882 0 0 1 0 3.489v2.154a1.882 1.882 0 0 1 0 3.489v2.154a1.881 1.881 0 1 1-2.45 2.45h-2.154a1.882 1.882 0 0 1-3.489 0h-2.154a1.882 1.882 0 0 1-3.489 0H5.28a1.882 1.882 0 1 1-2.45-2.45v-2.154a1.882 1.882 0 0 1 0-3.489v-2.154a1.882 1.882 0 0 1 0-3.489V5.28a1.882 1.882 0 1 1 2.45-2.45h2.154a1.882 1.882 0 0 1 3.489 0h2.154a1.882 1.882 0 0 1 3.489 0ZM6.357 5.417a.94.94 0 0 0-.94.94v11.286c0 .52.42.94.94.94h11.286a.94.94 0 0 0 .94-.94V6.357a.94.94 0 0 0-.94-.94H6.357Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFrame;
