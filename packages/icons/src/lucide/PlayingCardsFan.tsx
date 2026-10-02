import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlayingCardsFan = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12.65 7.65a2 2 0 0 1 2.629-1.046l5.51 2.374a2 2 0 0 1 1.046 2.628l-3.957 9.184a2 2 0 0 1-2.628 1.046l-5.51-2.374a2 2 0 0 1-1.046-2.628z" />
    <path d="M18 7.777V4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v10a2 2 0 0 0 1.137 1.805" />
    <path d="m8 4.389-4.364.809a2 2 0 0 0-1.602 2.33l1.822 9.833a2 2 0 0 0 2.331 1.602l2.542-.47" />
  </svg>
);
export default SvgPlayingCardsFan;
