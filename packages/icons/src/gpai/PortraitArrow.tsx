import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPortraitArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M14.966 7.834a.801.801 0 0 1-1.131 1.132L12.8 7.93v8.138l1.035-1.034a.8.8 0 0 1 1.13 1.131l-2.399 2.4a.8.8 0 0 1-1.131 0l-2.4-2.4a.8.8 0 1 1 1.131-1.13l1.034 1.032V7.932l-1.034 1.034a.8.8 0 0 1-1.13-1.132l2.399-2.4a.798.798 0 0 1 .407-.218l.014-.002a.804.804 0 0 1 .45.046c.013.005.026.013.04.02.08.037.155.089.22.155l2.4 2.399Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19 20a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v16ZM17 4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPortraitArrow;
