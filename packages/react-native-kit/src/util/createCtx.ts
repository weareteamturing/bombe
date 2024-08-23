import type { ReactNode, ReactElement, Context } from 'react';
import React, { createElement } from 'react';

export type ChildrenTransformer = (children?: ReactNode) => ReactNode | undefined;

type CreatedContext<T, P> = readonly [
  () => T,
  (props: { children?: ReactNode } & P) => ReactElement,
  React.Consumer<T>,
  () => T | undefined,
  Context<T | undefined>,
];
function createCtx<T, P extends object>(
  delegate: (props: P, transformChildren: (transformer: ChildrenTransformer) => void) => T,
  name = '',
): CreatedContext<T, P> {
  const context = React.createContext<T | undefined>(undefined);

  return [
    (): T => {
      const c = React.useContext(context);
      if (!c) {
        throw new Error(`useContext를 특정 ${name ?? '특정'}Provider 내부에서 사용하지 않았습니다.`);
      }
      return c;
    },
    ({ children: _children, ...props }: { children?: ReactNode } & P): ReactElement => {
      let children = _children;
      const value = delegate(props as P, (transformer) => {
        children = transformer(children);
      });
      return createElement(context.Provider, { value }, children);
    },
    context.Consumer as React.Consumer<T>,
    (): T | undefined => {
      return React.useContext(context);
    },
    context,
  ] as const;
}

export { createCtx };
