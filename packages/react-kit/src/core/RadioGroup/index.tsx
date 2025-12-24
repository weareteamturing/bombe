import { ChangeEventHandler, Children, PropsWithChildren, ReactNode } from 'react';

import { createSafeContext } from '../../utils/createSafeContext';
import Grid from '../Grid';

import RadioGroupOption, { RadioGroupOptionProps } from './RadioGroupOption';

type RadioGroupContextValue = {
  name?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string | number | boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const [RadioGroupContextProvider, useRadioGroupContext] = createSafeContext<RadioGroupContextValue>({
  errorMessage: 'RadioGroupContext 안에서 사용해야 합니다.',
});

type RadioGroupProps = {
  'name'?: string;
  'required'?: boolean;
  'disabled'?: boolean;
  'value'?: string | number | boolean;
  'onChange'?: ChangeEventHandler<HTMLInputElement>;
  /**
   * RadioGroup.Option들을 감싸는 컨테이너 렌더 함수
   * @example (children) => <Grid gapX={3}>{children}</Grid>
   */
  'renderContainer'?: (children: ReactNode) => ReactNode;
  /**
   * 각 RadioGroup.Option을 감싸는 래퍼 렌더 함수
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

const RadioGroup = ({
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
}: RadioGroupProps) => {
  // Children을 배열로 변환하여 renderItemWrapper 적용
  const wrappedChildren = Children.toArray(children).map((child, index) => renderItemWrapper(child, index));

  return (
    <RadioGroupContextProvider value={{ name, required, disabled, value, onChange }}>
      <fieldset role={'radiogroup'} {...ariaProps} style={{ border: 'none', padding: 0, margin: 0 }}>
        {renderContainer(wrappedChildren)}
      </fieldset>
    </RadioGroupContextProvider>
  );
};

export { useRadioGroupContext };
export default Object.assign(RadioGroup, { Option: RadioGroupOption });
export type { RadioGroupProps, RadioGroupContextValue, RadioGroupOptionProps };
