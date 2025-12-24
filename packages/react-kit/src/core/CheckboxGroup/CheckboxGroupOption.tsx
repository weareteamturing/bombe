import { ChangeEvent, PropsWithChildren, ReactNode, Ref, forwardRef } from 'react';

import Checkbox, { CheckboxProps } from '../Checkbox';
import FormControl from '../FormControl';

import { useCheckboxGroupContext } from '.';

type CheckboxGroupOptionProps = {
  /**
   * Checkbox의 값
   */
  value: string | number | boolean;
  /**
   * Label 텍스트 또는 컴포넌트
   * children이 있으면 children이 우선됨
   */
  label?: ReactNode;
  /**
   * 이 옵션만 비활성화 (CheckboxGroup의 disabled와 별개)
   */
  disabled?: boolean;
  /**
   * 개별 onChange 핸들러 (CheckboxGroup의 onChange와 함께 호출됨)
   */
  onChange?: (value: string | number | boolean, e: ChangeEvent<HTMLInputElement>) => void;
} & PropsWithChildren &
  Omit<CheckboxProps, 'name' | 'checked' | 'onChange' | 'disabled'>;

const CheckboxGroupOption = (
  {
    value,
    label,
    disabled: optionDisabled,
    onChange: onOptionChange,
    children,
    ...checkboxProps
  }: CheckboxGroupOptionProps,
  ref: Ref<HTMLInputElement>,
) => {
  const {
    name,
    value: groupValue,
    onChange: onGroupChange,
    disabled: groupDisabled,
    required,
  } = useCheckboxGroupContext();

  // CheckboxGroup의 value 배열에 현재 value가 포함되어 있는지 확인
  const checked = groupValue ? groupValue.includes(value) : false;
  const disabled = groupDisabled || optionDisabled;
  const displayLabel = children || label;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // CheckboxGroup의 onChange 호출
    onGroupChange?.(e);
    // Option의 개별 onChange 호출
    onOptionChange?.(value, e);
  };

  // FormControl ID 생성 (접근성)
  const formControlId = name ? `${name}-${value}` : String(value);

  return (
    <FormControl id={formControlId} disabled={disabled} required={required}>
      <Checkbox
        ref={ref}
        name={name}
        value={String(value)} // HTML input value는 string
        checked={checked}
        onChange={handleChange}
        aria-label={typeof displayLabel === 'string' ? displayLabel : undefined}
        {...checkboxProps}
      />
      {displayLabel && <FormControl.Label>{displayLabel}</FormControl.Label>}
    </FormControl>
  );
};

export default forwardRef(CheckboxGroupOption);
export type { CheckboxGroupOptionProps };
