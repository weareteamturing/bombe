import Grid from '../../../core/Grid';
import { getViewComponent } from '../../EnigmaUI';
import { GridView as GridViewType } from '../../types';

type Props = {
  view: GridViewType;
};

const GridView = ({ view: { units = [], gridProps } }: Props) => (
  <Grid {...gridProps}>
    {units.map(({ views: viewContainers, unitProps }) => {
      const unitKeySeperator = '_';
      const unitKey = viewContainers.map(({ id }) => id).join(unitKeySeperator);
      return (
        <Grid.Unit key={unitKey} {...unitProps}>
          {viewContainers.map((viewContainer) => {
            const ViewComponent = getViewComponent(viewContainer);
            return <ViewComponent view={viewContainer.view} />;
          })}
        </Grid.Unit>
      );
    })}
  </Grid>
);

export default GridView;
