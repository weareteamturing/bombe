import { ChangeEvent, ReactNode, Ref, forwardRef } from 'react';

import useFocusVisible from '../../hook/useFocusVisible';
import Checkbox, { CheckboxProps } from '../Checkbox';
import FormControl from '../FormControl';
import View from '../View';
import VisuallyHidden from '../_VisuallyHidden';

import { useCheckboxGroupContext } from '.';

/**
 * 커스텀 시각을 그릴 때 render 함수로 전달되는 옵션 상태
 */
type CheckboxGroupOptionRenderState = {
  /**
   * 이 옵션이 선택되었는지 여부
   */
  checked: boolean;
  /**
   * 이 옵션이 비활성화되었는지 여부
   */
  disabled: boolean;
  /**
   * 키보드 포커스(`:focus-visible`) 여부. 커스텀 시각이 포커스 링을 그릴 때 사용한다.
   */
  focused: boolean;
  /**
   * 이 옵션이 속한 그룹이 필수 입력인지 여부
   */
  required: boolean;
};

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
  /**
   * 옵션의 시각 표현.
   * - `ReactNode`: 기본 조합(`Checkbox` + `FormControl.Label`)의 label로 사용된다.
   * - render 함수(`(state) => ReactNode`): 접근성을 유지한 채(sr-only 네이티브 checkbox) 커스텀 시각을 그린다.
   */
  children?: ReactNode | ((state: CheckboxGroupOptionRenderState) => ReactNode);
} & Omit<CheckboxProps, 'name' | 'checked' | 'onChange' | 'disabled' | 'children'>;

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
  const { focused, onFocus, onBlur } = useFocusVisible();

  // CheckboxGroup의 value 배열에 현재 value가 포함되어 있는지 확인
  const checked = groupValue ? groupValue.includes(value) : false;
  const disabled = Boolean(groupDisabled || optionDisabled);
  const isRequired = Boolean(required);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // CheckboxGroup의 onChange 호출
    onGroupChange?.(e);
    // Option의 개별 onChange 호출
    onOptionChange?.(value, e);
  };

  // 커스텀 시각 모드: 네이티브 checkbox는 sr-only로 숨겨 접근성(role/키보드/form 참여)을 유지하고,
  // 시각 표현만 render 함수에 위임한다. label 래핑으로 클릭·접근 가능한 이름을 연결한다.
  if (typeof children === 'function') {
    return (
      <View as={'label'} display={'inline-flex'} sx={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
        <VisuallyHidden>
          <Checkbox
            ref={ref}
            name={name}
            value={String(value)}
            checked={checked}
            aria-label={typeof label === 'string' ? label : undefined}
            {...checkboxProps}
            disabled={disabled}
            required={isRequired}
            onChange={handleChange}
            onFocus={(e) => {
              checkboxProps.onFocus?.(e);
              onFocus(e);
            }}
            onBlur={(e) => {
              checkboxProps.onBlur?.(e);
              onBlur();
            }}
          />
        </VisuallyHidden>
        {children({ checked, disabled, focused, required: isRequired })}
      </View>
    );
  }

  const displayLabel = children || label;

  // FormControl ID 생성 (접근성)
  const formControlId = name ? `${name}-${value}` : String(value);

  return (
    <FormControl id={formControlId} disabled={disabled} required={isRequired}>
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
export type { CheckboxGroupOptionProps, CheckboxGroupOptionRenderState };
