import { ChangeEvent, ReactNode, Ref, forwardRef } from 'react';

import useFocusVisible from '../../hook/useFocusVisible';
import FormControl from '../FormControl';
import Radio, { RadioProps } from '../Radio';
import View from '../View';
import VisuallyHidden from '../_VisuallyHidden';

import { useRadioGroupContext } from '.';

/**
 * 커스텀 시각을 그릴 때 render 함수로 전달되는 옵션 상태
 */
type RadioGroupOptionRenderState = {
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
  /**
   * 옵션의 시각 표현.
   * - `ReactNode`: 기본 조합(`Radio` + `FormControl.Label`)의 label로 사용된다.
   * - render 함수(`(state) => ReactNode`): 접근성을 유지한 채(sr-only 네이티브 radio) 커스텀 시각을 그린다.
   */
  children?: ReactNode | ((state: RadioGroupOptionRenderState) => ReactNode);
} & Omit<RadioProps, 'name' | 'checked' | 'onChange' | 'disabled' | 'children'>;

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
  const { focused, onFocus, onBlur } = useFocusVisible();

  const checked = groupValue === value;
  const disabled = Boolean(groupDisabled || optionDisabled);
  const isRequired = Boolean(required);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // RadioGroup의 onChange 호출
    onGroupChange?.(e);
    // Option의 개별 onChange 호출
    onOptionChange?.(value, e);
  };

  // 커스텀 시각 모드: 네이티브 radio는 sr-only로 숨겨 접근성(role/키보드/form 참여)을 유지하고,
  // 시각 표현만 render 함수에 위임한다. label 래핑으로 클릭·접근 가능한 이름을 연결한다.
  if (typeof children === 'function') {
    return (
      <View as={'label'} display={'inline-flex'} sx={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
        <VisuallyHidden>
          <Radio
            ref={ref}
            name={name}
            value={String(value)}
            checked={checked}
            aria-label={typeof label === 'string' ? label : undefined}
            {...radioProps}
            disabled={disabled}
            required={isRequired}
            onChange={handleChange}
            onFocus={(e) => {
              radioProps.onFocus?.(e);
              onFocus(e);
            }}
            onBlur={(e) => {
              radioProps.onBlur?.(e);
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
export type { RadioGroupOptionProps, RadioGroupOptionRenderState };
