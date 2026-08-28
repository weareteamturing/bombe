import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLandscapeArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M7.834 9.034a.8.8 0 0 1 1.132 1.131L7.93 11.2h8.138l-1.034-1.035a.8.8 0 0 1 1.131-1.13l2.4 2.399a.8.8 0 0 1 0 1.131l-2.4 2.4a.8.8 0 1 1-1.13-1.131l1.032-1.034H7.932l1.034 1.034a.8.8 0 0 1-1.132 1.13l-2.4-2.399a.798.798 0 0 1-.218-.407l-.002-.014a.804.804 0 0 1 .046-.45c.005-.013.013-.026.02-.04a.798.798 0 0 1 .155-.22l2.399-2.4Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h16ZM4 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H4Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLandscapeArrow;
