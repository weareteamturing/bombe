import { FocusEvent, useState } from 'react';

/**
 * 키보드 포커스(`:focus-visible`)만 추적하는 훅.
 *
 * 시각적으로 숨긴 네이티브 컨트롤(예: sr-only radio/checkbox) 위에 커스텀 시각을 그릴 때,
 * 포커스 링을 커스텀 시각으로 옮기기 위해 사용한다. 마우스 클릭으로 인한 포커스는 제외된다.
 */
const isFocusVisible = (target: EventTarget & Element) => {
  try {
    return target.matches(':focus-visible');
  } catch {
    // `:focus-visible`을 지원하지 않는 환경에서는 보수적으로 포커스를 표시한다.
    return true;
  }
};

const useFocusVisible = () => {
  const [focused, setFocused] = useState(false);

  const onFocus = (e: FocusEvent<HTMLElement>) => {
    if (isFocusVisible(e.target)) setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
  };

  return { focused, onFocus, onBlur };
};

export default useFocusVisible;
