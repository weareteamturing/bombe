import { breakpoints } from '@teamturing/token-studio';
import { ComponentType } from 'react';

import useMediaQuery from '../../hook/useMediaQuery';
import { SingleColumnLayout } from '../Layout';
import { ImageView, TextView } from '../View';
import {
  ILayoutContainer,
  ISection,
  IViewContainer,
  Layout,
  LayoutComponentType,
  View,
  ViewComponentType,
} from '../types';

type Props = {
  section: ISection;
};

const EnigmaUI = ({ section: { views, responsiveLayout } }: Props) => {
  const isMatchDesktop = useMediaQuery(`screen and (min-width: ${breakpoints[1]})`);
  const isMatchTablet = useMediaQuery(`screen and (min-width: ${breakpoints[0]})`);
  const media: keyof typeof responsiveLayout = isMatchDesktop
    ? 'desktop'
    : !isMatchDesktop && isMatchTablet
    ? 'tablet'
    : 'mobile';

  const layoutContainer =
    responsiveLayout[media] || responsiveLayout['desktop'] || responsiveLayout['tablet'] || responsiveLayout['mobile'];

  const LayoutComponent = getLayoutComponent(layoutContainer);
  const layout = layoutContainer.layout;
  const viewsObject = Object.fromEntries(
    views.map((viewContainer) => {
      return [viewContainer.id, viewContainer.view];
    }),
  );
  const viewComponentsObject = Object.fromEntries(
    views.map((view) => {
      return [view.id, getViewComponent(view)];
    }),
  );

  return <LayoutComponent layout={layout} viewsObject={viewsObject} viewComponentsObject={viewComponentsObject} />;
};

const getLayoutComponent: (layoutContainer: ILayoutContainer) => ComponentType<{
  layout: Layout;
  viewsObject: { [k: string]: View };
  viewComponentsObject: { [k: string]: ComponentType<any> };
}> = (layoutContainer) => {
  const renderableLayoutComponent: Record<LayoutComponentType, ComponentType<any>> = {
    SingleColumnLayout: SingleColumnLayout,
  };
  const LayoutComponent = renderableLayoutComponent[layoutContainer.layoutComponentType];

  return LayoutComponent;
};

const getViewComponent: (viewContainer: IViewContainer) => ComponentType<any> = (viewContainer) => {
  const renderableViewComponent: Record<ViewComponentType, ComponentType<any>> = {
    TextView: TextView,
    ImageView: ImageView,
  };
  const ViewComponent = renderableViewComponent[viewContainer.viewComponentType];

  return ViewComponent;
};

export default EnigmaUI;
