import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLandscapeArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M23 16.5a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 1 16.5v-9A3.5 3.5 0 0 1 4.5 4h15A3.5 3.5 0 0 1 23 7.5v9Zm-2.5-9a1 1 0 0 0-1-1h-15l-.103.005a1 1 0 0 0-.892.892L3.5 7.5v9l.005.102a1 1 0 0 0 .995.898h15a1 1 0 0 0 1-1v-9Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M18.791 11.368a.88.88 0 0 1 0 1.264l-2.403 2.404a.922.922 0 0 1-.277.197.861.861 0 0 1-.355.07.862.862 0 0 1-.355-.07.922.922 0 0 1-.277-.197.88.88 0 0 1 0-1.265l.87-.87H8.006l.87.87a.88.88 0 0 1 0 1.265.922.922 0 0 1-.277.197.861.861 0 0 1-.354.07.862.862 0 0 1-.356-.07.922.922 0 0 1-.277-.197l-2.403-2.404a.88.88 0 0 1 0-1.264l2.403-2.404a.88.88 0 0 1 1.264 0 .88.88 0 0 1 0 1.266l-.87.87h7.988l-.87-.87a.88.88 0 0 1 0-1.266.88.88 0 0 1 1.264 0l2.403 2.404Z"
    />
  </svg>
);
export default SvgLandscapeArrow;
