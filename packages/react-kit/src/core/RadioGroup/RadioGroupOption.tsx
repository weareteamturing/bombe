import { ChangeEvent, PropsWithChildren, ReactNode, Ref, forwardRef } from 'react';

import FormControl from '../FormControl';
import Radio, { RadioProps } from '../Radio';

import { useRadioGroupContext } from '.';

type RadioGroupOptionProps = {
  /**
   * Radio의 값
   */
  value: string | number | boolean;
  /**
   * Label 텍스트 또는 컴포넌트
   * children이 있으면 children이 우선됨
   */
  label?: ReactNode;
  /**
   * 이 옵션만 비활성화 (RadioGroup의 disabled와 별개)
   */
  disabled?: boolean;
  /**
   * 개별 onChange 핸들러 (RadioGroup의 onChange와 함께 호출됨)
   */
  onChange?: (value: string | number | boolean, e: ChangeEvent<HTMLInputElement>) => void;
} & PropsWithChildren &
  Omit<RadioProps, 'name' | 'checked' | 'onChange' | 'disabled'>;

const RadioGroupOption = (
  { value, label, disabled: optionDisabled, onChange: onOptionChange, children, ...radioProps }: RadioGroupOptionProps,
  ref: Ref<HTMLInputElement>,
) => {
  const {
    name,
    value: groupValue,
    onChange: onGroupChange,
    disabled: groupDisabled,
    required,
  } = useRadioGroupContext();

  const checked = groupValue === value;
  const disabled = groupDisabled || optionDisabled;
  const displayLabel = children || label;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // RadioGroup의 onChange 호출
    onGroupChange?.(e);
    // Option의 개별 onChange 호출
    onOptionChange?.(value, e);
  };

  // FormControl ID 생성 (접근성)
  const formControlId = name ? `${name}-${value}` : String(value);

  return (
    <FormControl id={formControlId} disabled={disabled} required={required}>
      <Radio
        ref={ref}
        name={name}
        value={String(value)} // HTML input value는 string
        checked={checked}
        onChange={handleChange}
        aria-label={typeof displayLabel === 'string' ? displayLabel : undefined}
        {...radioProps}
      />
      {displayLabel && <FormControl.Label>{displayLabel}</FormControl.Label>}
    </FormControl>
  );
};

export default forwardRef(RadioGroupOption);
export type { RadioGroupOptionProps };
