import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAimPoint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <mask
      id="aim_point_svg__a"
      width={22}
      height={22}
      x={1}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}
    >
      <path fill="#fff" d="M23 1H1v22h22V1Z" />
    </mask>
    <g mask="url(#aim_point_svg__a)">
      <path
        fill="#F5525D"
        d="M12 7.188c.347 0 .693.039 1.031.116V2.031a1.031 1.031 0 1 0-2.062 0v5.273A4.598 4.598 0 0 1 12 7.187ZM12 16.813c.347 0 .693-.04 1.031-.117v5.273a1.031 1.031 0 1 1-2.062 0v-5.273c.338.077.684.117 1.031.116Z"
      />
      <path
        fill="currentColor"
        d="M12 16.813a4.812 4.812 0 1 1 0-9.624 4.812 4.812 0 0 1 0 9.623Zm0-7.563a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM4.513 10.969a7.562 7.562 0 0 1 6.456-6.456V2.451a9.625 9.625 0 0 0-8.539 8.518h2.083ZM13.031 4.513a7.562 7.562 0 0 1 6.456 6.456h2.062a9.625 9.625 0 0 0-8.518-8.539v2.083ZM19.487 13.031a7.563 7.563 0 0 1-6.456 6.456v2.062a9.625 9.625 0 0 0 8.539-8.518h-2.083ZM10.969 19.487a7.563 7.563 0 0 1-6.456-6.456H2.451a9.625 9.625 0 0 0 8.518 8.539v-2.083Z"
      />
      <path
        fill="#F5525D"
        d="M7.188 12c0-.347.039-.693.116-1.031H2.031a1.031 1.031 0 1 0 0 2.062h5.273A4.598 4.598 0 0 1 7.187 12ZM16.813 12c0-.347-.04-.693-.117-1.031h5.273a1.031 1.031 0 1 1 0 2.062h-5.273c.077-.338.117-.684.117-1.031Z"
      />
    </g>
  </svg>
);
export default SvgAimPoint;
