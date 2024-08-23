import type { SxProps } from '@react-native-styled-system/core';
import { useSx } from '@react-native-styled-system/core';
import { type GradientProps, useRefValue } from '@teamturing/react-native-kit';
import dayjs from 'dayjs';
import { parseToHsl } from 'polished';
import { type PropsWithChildren } from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';
import { Svg, LinearGradient, Stop, Defs, Rect } from 'react-native-svg';

type Props = PropsWithChildren<GradientProps & ViewProps>;

const GradientCollection = (props: Props & SxProps) => {
  const { filteredProps, getStyle } = useSx(props, { fallback: { overflow: 'hidden' } });
  const { colors, locations, start = { x: 0, y: 0 }, end = { x: 0, y: 1 }, children, ...rest } = filteredProps;
  const key = useRefValue(() => dayjs().valueOf() + Math.random());
  return (
    <View style={getStyle()} {...rest}>
      <Svg
        preserveAspectRatio={'none'}
        style={{ width: '100%', height: '100%', position: 'absolute' }}
        viewBox={'0 0 10 10'}
      >
        <Defs>
          <LinearGradient id={`gradientCollection-${key}`} x1={start.x} y1={start.y} x2={end.x} y2={end.y}>
            {colors.map((stopColor, i) => {
              const offset = `${locations[i] * 100}%`;

              const hsl = parseToHsl(stopColor);
              const stopOpacity = 'alpha' in hsl ? hsl.alpha : 1;

              return (
                <Stop
                  key={`${stopColor}-${offset}-${i}`}
                  offset={offset}
                  stopColor={stopColor}
                  stopOpacity={stopOpacity}
                />
              );
            })}
          </LinearGradient>
        </Defs>
        <Rect width={10} height={10} fill={`url(#gradientCollection-${key})`} />
      </Svg>
      {children}
    </View>
  );
};

export { GradientCollection };
export type { Props as GradientCollecitonProps };
