import { is } from '../../../util';

export enum WindowSizeClass {
  COMPACT = 1,
  MEDIUM = 2,
  EXPANDED = 3,
}
export function createWindowSizeClassRecord<T>({ expanded, medium, compact }: { compact: T; medium: T; expanded: T }) {
  return {
    [WindowSizeClass.COMPACT]: compact,
    [WindowSizeClass.MEDIUM]: medium,
    [WindowSizeClass.EXPANDED]: expanded,
  };
}

export function createWindowSizeClassIntRecord({
  compact,
  medium,
  expanded,
  fallback = 0,
}: {
  compact?: number;
  medium?: number;
  expanded?: number;
  fallback?: number;
}) {
  return createWindowSizeClassRecord({
    compact: is.number(compact) ? compact : fallback,
    medium: is.number(medium) ? medium : fallback,
    expanded: is.number(expanded) ? expanded : fallback,
  });
}

export function decideWindowWidthSizeClass(windowWidth: number): WindowSizeClass {
  if (windowWidth < 600) {
    return WindowSizeClass.COMPACT;
  }
  if (windowWidth < 840) {
    return WindowSizeClass.MEDIUM;
  }
  return WindowSizeClass.EXPANDED;
}
export function decideWindowHeightSizeClass(windowHeight: number): WindowSizeClass {
  if (windowHeight < 480) {
    return WindowSizeClass.COMPACT;
  }
  if (windowHeight < 900) {
    return WindowSizeClass.MEDIUM;
  }
  return WindowSizeClass.EXPANDED;
}
