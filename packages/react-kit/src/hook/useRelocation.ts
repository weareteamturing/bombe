import { Children, ComponentPropsWithoutRef, ComponentType, ReactElement, ReactNode, isValidElement } from 'react';

type RelocationConfig = Record<string, ComponentType<any>>;
type RelocationElements<T extends RelocationConfig> = {
  [Key in keyof T]: ReactElement<ComponentPropsWithoutRef<T[Key]>, T[Key]>;
};

type Props<T extends RelocationConfig> = {
  children: ReactNode;

  /**
   * 재배치할 컴포넌트들을 `key: Component` 형태로 선언합니다.
   */
  config: T;
};

/**
 * `children`의 컴포넌트들을 시각적으로 재배치하기 위한 훅입니다.
 */
const useRelocation = <T extends RelocationConfig>({
  children,
  config,
}: Props<T>): [Partial<RelocationElements<T>>, React.ReactNode[]] => {
  const keys = Object.keys(config);
  const values = Object.values(config);

  const relocatableElementsObject: Partial<RelocationElements<T>> = {};
  const restElements: ReactNode[] = [];

  Children.map(children, (child) => {
    if (!isValidElement(child)) return;

    const index = values.findIndex((value) => child.type === value);
    const isRelocatableComponent = index !== -1;
    const relocationKey = keys[index] as keyof T;
    const isDuplicatedComponent = relocatableElementsObject[relocationKey];

    if (!isRelocatableComponent) {
      restElements.push(child);
      return;
    }

    if (isDuplicatedComponent) {
      return;
    }

    if (isRelocatableComponent) {
      relocatableElementsObject[relocationKey] = child as ReactElement<
        React.ComponentPropsWithoutRef<T[keyof T]>,
        T[keyof T]
      >;
    }
  });

  return [relocatableElementsObject, restElements];
};

export default useRelocation;
export type { Props as UseRelocationProps };
