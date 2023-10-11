import { Grid, ItemList } from '../../..';
import { getViewComponent } from '../../EnigmaUI';
import { GridView as GridViewType } from '../../types';

type Props = {
  view: GridViewType;
};

const GridView = ({ view: { units = [], gridProps } }: Props) => (
  <Grid {...gridProps}>
    <ItemList
      items={units}
      renderItem={({ view: viewContainer, unitProps }) => {
        const ViewComponent = getViewComponent(viewContainer);
        return (
          <Grid.Unit key={viewContainer.id} {...unitProps}>
            <ViewComponent view={viewContainer.view} />
          </Grid.Unit>
        );
      }}
    />
  </Grid>
);

export default GridView;
