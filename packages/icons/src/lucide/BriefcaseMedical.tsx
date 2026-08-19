import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBriefcaseMedical = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 11v4M14 13h-4M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M18 6v14M6 6v14" />
    <rect width={20} height={14} x={2} y={6} rx={2} />
  </svg>
);
export default SvgBriefcaseMedical;
