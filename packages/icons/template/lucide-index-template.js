/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const camelCase = require('camelcase');

/**
 * 자사 아이콘과 같은 규칙으로 `Icon` 접미사를 붙인다.
 *
 *   import { SearchIcon } from '@teamturing/icons';
 *   import { SearchIcon as LucideSearchIcon } from '@teamturing/icons/lucide';
 *
 * 자사와 lucide 양쪽에 다 있는 개념이 72개라(`CalendarIcon`, `ArrowDownIcon` 등)
 * 한 파일에서 함께 쓸 때는 별칭이 필요하다. 별칭을 써도 번들에는 아무것도 더해지지 않는다.
 * 나머지 1852개는 그대로 가져다 쓰면 된다.
 *
 * 파일명은 lucide 원본 이름 그대로 둔다(`search.tsx`, 이유는 `svgr.lucide.config.js`).
 * export 이름은 SVGR이 PascalCase 파일명을 만들 때와 같은 `camelcase` 호출로 만든다.
 * SVGR이 쓰는 것과 같은 메이저(`^6`)여야 `grid-2x2` → `Grid2X2`처럼 숫자 뒤 대문자 규칙이 같다.
 */
function lucideIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    return `export { default as ${camelCase(basename, { pascalCase: true })}Icon } from './${basename}'`;
  });
  return exportEntries.join('\n');
}

module.exports = lucideIndexTemplate;
