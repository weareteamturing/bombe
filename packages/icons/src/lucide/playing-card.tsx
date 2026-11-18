import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlayingCard = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12.832 8.445a1 1 0 0 0-1.589-.098l-2.075 3.098a1 1 0 0 0 0 1.11l2 3a1 1 0 0 0 1.664 0l2-3a1 1 0 0 0 0-1.11z" />
    <rect width={14} height={20} x={5} y={2} rx={2} />
  </svg>
);
export default SvgPlayingCard;
