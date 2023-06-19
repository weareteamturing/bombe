import * as React from 'react';
import type { SVGProps } from 'react';
const SvgWrong = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M4.807 20.69a1.059 1.059 0 0 1-1.497-1.497L10.502 12 3.31 4.807A1.059 1.059 0 1 1 4.807 3.31L12 10.502l7.192-7.192a1.059 1.059 0 1 1 1.498 1.497L13.497 12l7.193 7.192a1.059 1.059 0 0 1-1.498 1.498L12 13.497 4.807 20.69Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.666 3.451A.859.859 0 1 0 3.45 4.666L10.785 12l-7.334 7.334a.859.859 0 0 0 1.215 1.215L12 13.214l7.334 7.334a.859.859 0 0 0 1.215-1.214L13.215 12l7.334-7.334a.859.859 0 1 0-1.215-1.215L12 10.785 4.666 3.451Zm-1.498-.283a1.259 1.259 0 0 1 1.78 0L12 10.22l7.051-7.05a1.259 1.259 0 0 1 1.78 1.78l-7.05 7.05 7.05 7.052a1.259 1.259 0 0 1-1.78 1.78L12 13.78l-7.051 7.051a1.259 1.259 0 0 1-1.78-1.78L10.218 12 3.17 4.948a1.259 1.259 0 0 1 0-1.78Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWrong;
