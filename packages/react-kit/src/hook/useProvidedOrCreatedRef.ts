import { RefObject, useRef } from 'react';

/**
 * 제공된 `ref`가 없는 경우 새로운 `ref`를 만들어 사용하고, 있는 경우 제공된 ref를 사용할 수 있는 훅입니다.
 */
const useProvidedOrCreatedRef = <T>(providedRef?: RefObject<T>) => {
  const createdRef = useRef<T>(null);
  return providedRef ?? createdRef;
};

export default useProvidedOrCreatedRef;
