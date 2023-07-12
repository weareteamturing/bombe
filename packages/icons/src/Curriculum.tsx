import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCurriculum = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillOpacity={0.6}
      fillRule="evenodd"
      d="M1 3.755A3.755 3.755 0 0 1 8.348 2.66h8.924a5.007 5.007 0 0 1 0 10.014H7.676a1.27 1.27 0 0 1-.203-.017l-1.049.017a2.503 2.503 0 1 0 0 5.006h8.268a3.756 3.756 0 1 1-.222 2.504H6.424a5.007 5.007 0 1 1 0-10.014h10.848a2.503 2.503 0 0 0 0-5.007H8.237A3.756 3.756 0 0 1 1 3.755Z"
      clipRule="evenodd"
    />
    <rect width={7.51} height={7.51} x={1} fill="currentColor" rx={3.755} />
    <rect width={7.51} height={7.51} x={14.35} y={15.5} fill="currentColor" rx={3.755} />
  </svg>
);
export default SvgCurriculum;
