import * as React from 'react';
import { SVGProps } from 'react';
const SvgTicketColor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 25" {...props}>
    <path
      fill="url(#ticket_color_svg__a)"
      fillRule="evenodd"
      d="M3.25 5a1 1 0 0 0-1 1v4.5a2 2 0 1 1 0 4V19a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1v-4.5a2 2 0 1 1 0-4V6a1 1 0 0 0-1-1h-19Zm6.607 9.852a.35.35 0 0 0 .344.315h5.098a.35.35 0 0 0 .344-.315l.438-3.88c.039-.348-.382-.54-.605-.275l-1.297 1.54-.96-2.097a.513.513 0 0 0-.939 0l-.959 2.098-1.297-1.54c-.223-.265-.644-.074-.605.274l.438 3.88Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="ticket_color_svg__a"
        x1={3.45}
        x2={15.716}
        y1={6.821}
        y2={23.129}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0F0E0F" />
        <stop offset={1} stopColor="#595959" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgTicketColor;
