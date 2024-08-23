import { View } from 'react-native';

import { Grid } from './Layout/Grid';

type Props<T> = {
  data: T[];
  getValue: (datum: T) => number;
  getColor: (datum: T) => string;
};

const HorizontalStackedBar = <T,>({ data, getValue, getColor }: Props<T>) => {
  const totalValue = data.reduce((acc, cur) => acc + getValue(cur), 0);
  return (
    <View style={{ borderRadius: 8, overflow: 'hidden' }}>
      <Grid spacing={0.5}>
        {data.map((datum, i) =>
          getValue(datum) > 0 ? (
            <Grid.Unit key={i} size={getValue(datum) / totalValue}>
              <View style={{ backgroundColor: getColor(datum), height: 24 }} />
            </Grid.Unit>
          ) : null,
        )}
      </Grid>
    </View>
  );
};

export { HorizontalStackedBar };
