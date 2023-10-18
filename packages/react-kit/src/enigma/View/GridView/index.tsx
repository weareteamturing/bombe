import Grid from '../../../core/Grid';
import Space from '../../../core/Space';
import { getViewComponent } from '../../EnigmaUI';
import { GridViewType } from '../../types';

type Props = {
  view: GridViewType;
};

const GridView = ({ view: { units = [], gridProps, spaceProps } }: Props) => (
  <Space {...spaceProps}>
    <Grid {...gridProps}>
      {units.map(({ views: viewContainers, unitProps }) => {
        const unitKeySeperator = '_';
        const unitKey = viewContainers.map(({ id }) => id).join(unitKeySeperator);
        return (
          <Grid.Unit key={unitKey} {...unitProps}>
            {viewContainers.map((viewContainer) => {
              const ViewComponent = getViewComponent(viewContainer);
              return <ViewComponent key={viewContainer.id} view={viewContainer.view} />;
            })}
          </Grid.Unit>
        );
      })}
    </Grid>
  </Space>
);

export default GridView;
