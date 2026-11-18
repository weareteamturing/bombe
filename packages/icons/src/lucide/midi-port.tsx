import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMidiPort = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 18h.01M15 2.458V5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V2.458M16 16h.01M18 12h.01M6 12h.01M8 16h.01" />
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default SvgMidiPort;
