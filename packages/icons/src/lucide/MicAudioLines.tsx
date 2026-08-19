import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMicAudioLines = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 3v2.341M12 17v4M14 5v.341M18 5v13M2 10v3M22 10v3M6 6v11M9 21h6" />
    <rect width={4} height={8} x={10} y={9} rx={2} />
  </svg>
);
export default SvgMicAudioLines;
