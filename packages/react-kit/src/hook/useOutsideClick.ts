import { RefObject, useEffect } from 'react';

/**
 * 특정 컴포넌트을 제외한 바깥쪽을 클릭했을 때를 핸들링하기 위한 훅입니다.
 */
const useOutsideClick = ({
  containerRef,
  onOutsideClick,
}: {
  containerRef: RefObject<HTMLDivElement>;
  onOutsideClick: (e: MouseEvent | TouchEvent) => void;
}) => {
  const handleClick = (e: MouseEvent | TouchEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      onOutsideClick(e);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
