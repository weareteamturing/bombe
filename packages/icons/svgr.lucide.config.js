/* eslint-disable @typescript-eslint/no-var-requires */
const indexTemplate = require('./template/lucide-index-template');

/**
 * lucide 전용 SVGR 설정. 자사 아이콘 변환(`svgr` 스크립트)과 분리해 둔다.
 *
 * 자사와 다른 점:
 * - `replaceAttrValues`가 없다. lucide는 이미 `stroke="currentColor"`로 그려져 있다.
 * - 인덱스 템플릿이 `Icon` 접미사를 붙이지 않는다.
 * - `class` 속성을 지운다. lucide 원본에 `class="lucide lucide-search"`가 들어 있는데,
 *   svgo의 `prefixIds`가 여기에 파일명을 붙여 `search_svg__lucide` 같은 문자열을 만든다.
 *   1769개에 걸쳐 바이트만 쓰고 하는 일은 없다.
 */
module.exports = {
  icon: true,
  typescript: true,
  indexTemplate,
  svgoConfig: {
    plugins: [
      /** 직접 넘기면 SVGR 기본값을 대체하므로, 기본값이 하던 viewBox 보존을 여기서 다시 명시한다 */
      { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
      { name: 'removeAttrs', params: { attrs: 'class' } },
    ],
  },
};
