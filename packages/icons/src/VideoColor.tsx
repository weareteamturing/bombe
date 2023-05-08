import * as React from 'react';
import { SVGProps } from 'react';
const SvgVideoColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path fill="#D9CDF9" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Z" />
    <path
      fill="#9C7EEF"
      d="M15.507 11.474c.39.234.39.818 0 1.052l-4.829 2.892c-.39.233-.878-.059-.878-.526V9.108c0-.467.488-.76.878-.526l4.83 2.892Z"
    />
  </svg>
);
export default SvgVideoColor;
