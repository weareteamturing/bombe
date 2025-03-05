import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPillColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="#C6D8FA" d="M12 4a5.657 5.657 0 0 1 8 8l-4 4-8-8 4-4Z" />
    <path fill="#6D99F1" d="m8 8 8 8-4 4a5.657 5.657 0 1 1-8-8l4-4Z" />
  </svg>
);
export default SvgPillColor;
