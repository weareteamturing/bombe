import ItemList from '../../../core/ItemList';
import Space from '../../../core/Space';
import { SingleColumnLayoutType as SingleColumnLayoutType } from '../../types';

type Props = { layout: SingleColumnLayoutType; viewsObject: any; viewComponentsObject: any };

const SingleColumnLayout = ({ layout, viewsObject, viewComponentsObject }: Props) => (
  <ItemList
    items={layout.main}
    renderItem={({ viewContainerId }) => {
      const view = viewsObject[viewContainerId];
      const ViewComponent = viewComponentsObject[viewContainerId];
      return ViewComponent ? <ViewComponent view={view} /> : null;
    }}
    renderItemWrapper={(children, { viewContainerId, spaceProps }, i) => (
      <Space key={[viewContainerId, `${i}`].join('-')} {...spaceProps}>
        {children}
      </Space>
    )}
  />
);

export default SingleColumnLayout;
