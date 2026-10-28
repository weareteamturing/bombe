import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGraphStar = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m12.342 9.316 1.764-3.527M12.59 14.545l2.35 3.759M13.982 12.332l4.03.447M5.414 17.586 8.88 14.12M9.025 9.742 5.317 5.505" />
    <circle cx={11} cy={12} r={3} />
    <circle cx={15} cy={4} r={2} />
    <circle cx={16} cy={20} r={2} />
    <circle cx={20} cy={13} r={2} />
    <circle cx={4} cy={19} r={2} />
    <circle cx={4} cy={4} r={2} />
  </svg>
);
export default SvgGraphStar;
