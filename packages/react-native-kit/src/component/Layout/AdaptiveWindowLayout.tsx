import type React from 'react';

import is from '../../util/is';

import { useDynamicLayout } from './Layout/LayoutProvider';
import type { WindowSizeClass } from './Layout/WindowSizeClass';

export type AdaptiveLayoutProps = {
  ifElement?: React.ReactElement | null;
  elseElement?: React.ReactElement | null;
  windowWidthSizeClassMin?: WindowSizeClass;
  windowHeightSizeClassMin?: WindowSizeClass;
  windowWidthMin?: number;
  windowHeightMin?: number;
};
/**
 * All properties indicate inclusive.
 * for example, if windowWidthSizeClassMin is MEDIUM then MEDIUM, EXAPDNED devices will pass condition
 * */
const AdaptiveWindowLayout = (props: AdaptiveLayoutProps) => {
  assertProperties(props);
  const { windowWidthSizeClassMin, windowWidthMin, windowHeightMin, ifElement, elseElement, windowHeightSizeClassMin } =
    props;
  const { isWindowHeightSizeClassAtLeast, isWindowWidthSizeClassAtLeast, screenWidth, screenHeight } =
    useDynamicLayout();

  const shouldRender =
    (windowWidthSizeClassMin ? isWindowWidthSizeClassAtLeast(windowWidthSizeClassMin) : true) &&
    (windowHeightSizeClassMin ? isWindowHeightSizeClassAtLeast(windowHeightSizeClassMin) : true) &&
    (is.number(windowWidthMin) ? screenWidth >= windowWidthMin : true) &&
    (is.number(windowHeightMin) ? screenHeight >= windowHeightMin : true);

  if (shouldRender) {
    return ifElement || null;
  } else {
    return elseElement || null;
  }
};

function assertProperties({
  windowHeightSizeClassMin,
  windowWidthSizeClassMin,
  windowHeightMin,
  windowWidthMin,
}: AdaptiveLayoutProps) {
  if (is.number(windowWidthMin) && windowWidthSizeClassMin) {
    throw new Error('windowWidthMin not able to be set with windowWidthSizeClassMin');
  }

  if (is.number(windowHeightMin) && windowHeightSizeClassMin) {
    throw new Error('windowHeightMin not able to be set with windowHeightSizeClassMin');
  }
}

export { AdaptiveWindowLayout };
