import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThunder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M13.825 1.322c.785-.833 2.172-.116 1.945 1.008l-1.412 6.972 4.673 1.632a1.138 1.138 0 0 1 .454 1.854l-9.311 9.89c-.786.833-2.173.116-1.944-1.007l1.41-6.973-4.672-1.631a1.139 1.139 0 0 1-.453-1.856l9.31-9.889ZM6.88 11.615l5.066 1.771-1.157 5.72 6.328-6.722-5.065-1.77 1.157-5.721-6.329 6.722Z"
    />
  </svg>
);
export default SvgThunder;
