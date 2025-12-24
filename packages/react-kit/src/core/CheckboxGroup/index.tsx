import { ChangeEventHandler, Children, PropsWithChildren, ReactNode } from 'react';

import { createSafeContext } from '../../utils/createSafeContext';
import Grid from '../Grid';

import CheckboxGroupOption, { CheckboxGroupOptionProps } from './CheckboxGroupOption';

type CheckboxGroupContextValue = {
  name?: string;
  required?: boolean;
  disabled?: boolean;
  value?: Array<string | number | boolean>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const [CheckboxGroupContextProvider, useCheckboxGroupContext] = createSafeContext<CheckboxGroupContextValue>({
  errorMessage: 'CheckboxGroupContext 안에서 사용해야 합니다.',
});

type CheckboxGroupProps = {
  'name'?: string;
  'required'?: boolean;
  'disabled'?: boolean;
  'value'?: Array<string | number | boolean>;
  'onChange'?: ChangeEventHandler<HTMLInputElement>;
  /**
   * CheckboxGroup.Option들을 감싸는 컨테이너 렌더 함수
   * @example (children) => <Grid gapX={3}>{children}</Grid>
   */
  'renderContainer'?: (children: ReactNode) => ReactNode;
  /**
   * 각 CheckboxGroup.Option을 감싸는 래퍼 렌더 함수
   * @example (children, i) => <Grid.Unit size={1/3} key={i}>{children}</Grid.Unit>
   */
  'renderItemWrapper'?: (children: ReactNode, index: number) => ReactNode;
  /**
   * aria-label for accessibility
   */
  'aria-label'?: string;
  /**
   * aria-labelledby for accessibility
   */
  'aria-labelledby'?: string;
} & PropsWithChildren;

const CheckboxGroup = ({
  children,
  name,
  required = true,
  disabled = false,
  value,
  onChange,
  renderContainer = (children) => (
    <Grid gapX={3} gapY={3}>
      {children}
    </Grid>
  ),
  renderItemWrapper = (children, i) => (
    <Grid.Unit key={i} size={1}>
      {children}
    </Grid.Unit>
  ),
  ...ariaProps
}: CheckboxGroupProps) => {
  // Children을 배열로 변환하여 renderItemWrapper 적용
  const wrappedChildren = Children.toArray(children).map((child, index) => renderItemWrapper(child, index));

  return (
    <CheckboxGroupContextProvider value={{ name, required, disabled, value, onChange }}>
      <fieldset role={'group'} {...ariaProps} style={{ border: 'none', padding: 0, margin: 0 }}>
        {renderContainer(wrappedChildren)}
      </fieldset>
    </CheckboxGroupContextProvider>
  );
};

export { useCheckboxGroupContext };
export default Object.assign(CheckboxGroup, { Option: CheckboxGroupOption });
export type { CheckboxGroupProps, CheckboxGroupContextValue, CheckboxGroupOptionProps };
