import type { ReactElement } from 'react';
import type React from 'react';
import { forwardRef, useState, useImperativeHandle } from 'react';

type PartialRerenderProps = {
  renderChildren: () => ReactElement | null;
};
export type PartialRerenderRef = {
  rerender: () => void;
};
/**
 * 단순히 children tree를 replace시킵니다. 렌더링 성능이 필요하거나 애니메이션이 필요한 컴포넌트들은
 * children으로 오면 안됩니다. * 개선할 수 있다면 개선이 필요합니다.
 */
const PartialRerender = forwardRef(
  ({ renderChildren }: PartialRerenderProps, ref: React.ForwardedRef<PartialRerenderRef>) => {
    const [, setR] = useState(0);
    useImperativeHandle(ref, () => ({ rerender: () => setR((r) => r + 1) }), []);
    return renderChildren();
  },
);

export { PartialRerender };
export type { PartialRerenderProps };
