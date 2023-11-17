import { isNullable } from './isNullable';

type Options = {
  behavior?: ScrollBehavior;
  direction?: 'horizontal' | 'vertical';
  offset?: number;
};

export const scrollIntoView = ({
  childrenRef,
  scrollContainerRef,
  options = { behavior: 'smooth', direction: 'vertical', offset: 0 },
}: {
  childrenRef: HTMLElement;
  scrollContainerRef?: HTMLElement;
  options: Options;
}) => {
  if (!isNullable(scrollContainerRef)) {
    const startSide = options.direction === 'vertical' ? 'top' : 'left';
    const endSide = options.direction === 'vertical' ? 'bottom' : 'right';
    const scrollSide = options.direction === 'vertical' ? 'scrollTop' : 'scrollLeft';
    const { [startSide]: childrenStart, [endSide]: childrenEnd } = childrenRef.getBoundingClientRect();
    const { [startSide]: scrollContainerStart, [endSide]: scrollContainerEnd } =
      scrollContainerRef.getBoundingClientRect();

    const isChildrenStartAboveScrollContainer = childrenStart < scrollContainerStart;
    const isChildrenBottomBelowScrollContainer = childrenEnd > scrollContainerEnd;

    if (isChildrenStartAboveScrollContainer) {
      const scrollDistance =
        childrenStart - scrollContainerStart + scrollContainerRef[scrollSide] - (options.offset || 0);
      scrollContainerRef.scrollTo({ behavior: options.behavior, [startSide]: scrollDistance });
    } else if (isChildrenBottomBelowScrollContainer) {
      const scrollDistance = childrenEnd - scrollContainerEnd + scrollContainerRef[scrollSide] + (options.offset || 0);
      scrollContainerRef.scrollTo({ behavior: options.behavior, [startSide]: scrollDistance });
    }
  } else {
    childrenRef.scrollIntoView({ behavior: options.behavior });
  }
};
