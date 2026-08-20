import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAiSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M20 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5Zm2 14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14Z"
    />
    <path
      fill="currentColor"
      d="M10 7a1.5 1.5 0 0 1 .604.127l.184.097.169.12c.16.133.29.298.384.484.022.043.04.088.056.134l2.552 7.725a1 1 0 1 1-1.898.627L11.616 15H8.384l-.435 1.314a1 1 0 1 1-1.898-.627l2.553-7.725.055-.134a1.5 1.5 0 0 1 .553-.604l.184-.097A1.5 1.5 0 0 1 10 7Zm-.955 6h1.91L10 10.11 9.045 13ZM15.5 16V8a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0Z"
    />
  </svg>
);
export default SvgAiSquare;
