import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSatelliteDish = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M18 12a6 6 0 0 0-6-6M2.824 10.459a8 8 0 0 0 10.717 10.717c.558-.276.623-1.012.183-1.452l-9.448-9.448c-.44-.44-1.176-.375-1.452.183M22 12A10 10 0 0 0 12 2M9 15l4-4" />
  </svg>
);
export default SvgSatelliteDish;
