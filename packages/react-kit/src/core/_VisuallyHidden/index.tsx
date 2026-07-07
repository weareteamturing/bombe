import styled from 'styled-components';

/**
 * 화면에서는 숨기지만 접근성 트리·탭 순서·포커스는 유지하는 래퍼.
 *
 * `display: none` / `visibility: hidden`과 달리 내부 요소가 포커스 가능한 상태로 남으므로,
 * 커스텀 시각 뒤에 네이티브 컨트롤(radio/checkbox 등)을 숨겨둘 때 사용한다.
 */
const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export default VisuallyHidden;
