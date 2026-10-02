import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVectorPolygon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m12.828 4.813 5.344 2.375M15.769 18.153l3.461-8.306M5.687 14.074l7.625 4.852M9.772 5.579 5.228 11.42" />
    <circle cx={11} cy={4} r={2} />
    <circle cx={15} cy={20} r={2} />
    <circle cx={20} cy={8} r={2} />
    <circle cx={4} cy={13} r={2} />
  </svg>
);
export default SvgVectorPolygon;
