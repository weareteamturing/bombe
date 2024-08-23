import { Circle, G, Svg } from 'react-native-svg';

import { palette } from '../theme';
import { is } from '../util';

type Props<T> = {
  size: number;
  innerSize: number;
  data?: T[];
  getValue: (datum: T) => number;
  getColor: (datum: T) => string;
  withoutSort?: boolean;
  rotationOffset?: number;
};

const PieChart = <T,>({
  size,
  innerSize,
  data: propData = [],
  getValue,
  getColor,
  withoutSort = false,
  rotationOffset = 0,
}: Props<T>) => {
  const strokeWidth = (size - innerSize) / 2;
  const radius = innerSize / 2 + strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const totalValue = propData.reduce((acc, cur) => acc + getValue(cur), 0);
  const data = withoutSort ? propData : [...propData].sort((a, b) => getValue(b) - getValue(a));

  return (
    <Svg width={size} height={size}>
      <G origin={[size / 2, size / 2]} rotation={-90}>
        {is.emptyArray(data) || totalValue === 0 ? (
          <Circle
            fill={'none'}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={palette.gray200}
            strokeWidth={strokeWidth}
          />
        ) : (
          data.map((datum, i) => (
            <Circle
              fill={'none'}
              key={i}
              origin={[size / 2, size / 2]}
              rotation={
                (i !== 0 ? 360 * (data.slice(0, i).reduce((acc, cur) => acc + getValue(cur), 0) / totalValue) : 0) +
                rotationOffset
              }
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={getColor(datum)}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - getValue(datum) / totalValue)}
            />
          ))
        )}
      </G>
    </Svg>
  );
};

export { PieChart };
