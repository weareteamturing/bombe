import * as React from 'react';
import type { SVGProps } from 'react';
const SvgQuiz = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <g fill="currentColor" opacity={0.6}>
      <path d="M12.2 11a3.2 3.2 0 1 1-6.4 0 3.2 3.2 0 0 1 6.4 0Z" />
      <path
        fillRule="evenodd"
        d="M3.5 2A2.5 2.5 0 0 0 1 4.5v13A2.5 2.5 0 0 0 3.5 20h11a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 14.5 2h-11ZM14 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
        clipRule="evenodd"
      />
    </g>
    <path
      fill="currentColor"
      d="M16.578 3.11c.266.397.422.875.422 1.39v13a2.5 2.5 0 0 1-2.5 2.5H9.723l7.668 1.77a2.5 2.5 0 0 0 2.999-1.873L23.314 7.23a2.5 2.5 0 0 0-1.874-2.998l-4.862-1.123Z"
    />
  </svg>
);
export default SvgQuiz;
