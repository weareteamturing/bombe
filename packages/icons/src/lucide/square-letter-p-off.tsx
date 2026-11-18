import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSquareLetterPOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 12h1a2 2 0 0 0 0-4H9.5a.5.5 0 0 0-.5.5V9M15.343 21H5a2 2 0 0 1-2-2V8.657M22 22 2 2" />
    <path d="M3.586 3.586A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.586 1.414M9 14.657V16" />
  </svg>
);
export default SvgSquareLetterPOff;
