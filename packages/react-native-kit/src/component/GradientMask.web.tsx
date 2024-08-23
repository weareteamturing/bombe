import { useSx } from '@react-native-styled-system/core';
import { parseToHsl } from 'polished';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { Stop } from 'react-native-svg';

import { gradient } from '../theme';

import { Box } from './Box';
import type { GradientMaskProps } from './GradientMask';

/* text, svg(fill), img 지원 */
const GradientMask = ({ onLayout, ...props }: GradientMaskProps) => {
  const { filteredProps, getStyle } = useSx(props);
  const { children, gradient: _gradientKey = 'gradient4', disabled, ...viewProps } = filteredProps;

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current || disabled) {
      return;
    }

    const { colors, start = { x: 0, y: 0 }, locations, end = { x: 0, y: 1 } } = gradient[_gradientKey];

    const direction = end?.x === 1 ? (end?.y === 1 ? 'to right bottom' : 'to right') : 'to bottom';
    const colorsWithPercent = colors.map((color, index) => [color, `${locations[index] * 100}%`].join(' ')).join(', ');
    const gradientStyle = `linear-gradient(${direction}, ${colorsWithPercent})`;

    /* text */
    Array.from(ref.current?.getElementsByTagName('div') ?? []).forEach((ele) => {
      if (ele.childNodes.length === 1 && ele.childNodes[0].nodeType === Node.TEXT_NODE) {
        ele.setAttribute('style', ele.style.cssText + `background: ${gradientStyle} text; color:transparent;`);
      }
    });

    /* svg */
    const svgs = Array.from(ref.current?.getElementsByTagName('svg') ?? []);

    if (svgs.length > 0) {
      const gradientId = 'gradientCollection';

      const createDefsWithGradient = () => {
        const svgns = 'http://www.w3.org/2000/svg';
        const defsNode = document.createElementNS(svgns, 'defs');
        const linearGradientNode = document.createElementNS(svgns, 'linearGradient');
        colors.forEach((stopColor, i) => {
          const offset = `${locations[i] * 100}%`;

          const hsl = parseToHsl(stopColor);
          const stopOpacity = 'alpha' in hsl ? hsl.alpha : 1;

          const stopNode = document.createElementNS(svgns, 'stop');
          stopNode.setAttribute('key', `${stopColor}-${offset}-${i}`);
          stopNode.setAttribute('offset', offset);
          stopNode.setAttribute('stop-color', stopColor);
          stopNode.setAttribute('stop-opacity', `${stopOpacity}`);

          linearGradientNode.appendChild(stopNode);
          return (
            <Stop key={`${stopColor}-${offset}-${i}`} offset={offset} stopColor={stopColor} stopOpacity={stopOpacity} />
          );
        });

        linearGradientNode.setAttribute('id', `${gradientId}`);
        linearGradientNode.setAttribute('x1', `${start.x}`);
        linearGradientNode.setAttribute('y1', `${start.y}`);
        linearGradientNode.setAttribute('x2', `${end.x}`);
        linearGradientNode.setAttribute('y2', `${end.y}`);

        defsNode.appendChild(linearGradientNode);
        return defsNode;
      };

      svgs.forEach((svg) => {
        svg.innerHTML = svg.innerHTML.replace(/fill="#[0-9A-Fa-f]{6}"/g, `fill="url('#${gradientId}')"`);
        const def = createDefsWithGradient();
        svg.appendChild(def);
      });
    }

    /* img */
    const imgs = Array.from(ref.current?.getElementsByTagName('img') ?? []);
    imgs.forEach((img) => {
      const div = document.createElement('div');
      div.setAttribute(
        'style',
        `width: 100%; height: 100%;
        -webkit-mask-size: contain; mask-size: contain;
        mask-image: url(${img.src}); -webkit-mask-image: url(${img.src}); 
        background: ${gradientStyle};`,
      );
      const parent = img.parentElement;
      if (parent) {
        parent.innerHTML = '';
        parent?.appendChild(div);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  const [canProcessingImg, setCanProcessingImg] = useState(false);

  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      setCanProcessingImg(true);
      onLayout?.(event);
    },
    [onLayout],
  );

  useEffect(() => {
    if (!ref.current || disabled || !canProcessingImg) {
      return;
    }

    const { colors, locations, end = { x: 0, y: 1 } } = gradient[_gradientKey];

    const direction = end?.x === 1 ? (end?.y === 0 ? 'to right' : 'to right bottom') : 'to bottom';
    const colorsWithPercent = colors.map((color, index) => [color, `${locations[index] * 100}%`].join(' ')).join(', ');
    const gradientStyle = `linear-gradient(${direction}, ${colorsWithPercent})`;

    /* img */
    const imgs = Array.from(ref.current?.getElementsByTagName('img') ?? []);
    imgs.forEach((img) => {
      const div = document.createElement('div');
      div.setAttribute(
        'style',
        `width: 100%; height: 100%;
        -webkit-mask-size: contain; mask-size: contain;
        mask-image: url(${img.src}); -webkit-mask-image: url(${img.src}); 
        background: ${gradientStyle};`,
      );
      const parent = img.parentElement;
      if (parent) {
        parent.innerHTML = '';
        parent?.appendChild(div);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, canProcessingImg]);

  return (
    <Box ref={ref as any} onLayout={handleLayout} {...viewProps} style={getStyle()}>
      {children}
    </Box>
  );
};

export { GradientMask };
