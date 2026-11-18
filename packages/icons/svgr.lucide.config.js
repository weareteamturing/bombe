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
 * - 파일명을 lucide 원본 그대로 kebab-case로 둔다(`letter-s.tsx`). PascalCase로 바꾸면
 *   `letter-s`와 `letters`가 `LetterS.tsx`/`Letters.tsx`처럼 대소문자만 다른 쌍이 되어,
 *   macOS APFS에서 한쪽이 다른 쪽을 덮어쓴다. src뿐 아니라 `preserveModules`로 그대로 나가는
 *   `dist/lucide`·`esm/lucide`에서도, 사용처의 node_modules에서도 같은 일이 생긴다.
 *   lucide 원본 이름은 소문자 kebab-case라 서로 겹치지 않는다. export 이름은 인덱스 템플릿이 정한다.
 */
module.exports = {
  icon: true,
  typescript: true,
  filenameCase: 'kebab',
  indexTemplate,
  svgoConfig: {
    plugins: [
      /** 직접 넘기면 SVGR 기본값을 대체하므로, 기본값이 하던 viewBox 보존을 여기서 다시 명시한다 */
      { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
      { name: 'removeAttrs', params: { attrs: 'class' } },
    ],
  },
};
