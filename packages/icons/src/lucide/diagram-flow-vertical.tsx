import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDiagramFlowVertical = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 8.5a3.5 3.5 0 0 0 3.5 3.5 3.5 3.5 0 0 1 3.5 3.5v.5M12 8v.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 0 5 15.5v.5" />
    <rect width={6} height={6} x={16} y={16} rx={1} />
    <rect width={6} height={6} x={2} y={16} rx={1} />
    <rect width={6} height={6} x={9} y={2} rx={1} />
  </svg>
);
export default SvgDiagramFlowVertical;
