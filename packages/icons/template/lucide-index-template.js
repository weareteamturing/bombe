// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/**
 * 자사 아이콘과 같은 규칙으로 `Icon` 접미사를 붙인다.
 *
 *   import { SearchIcon } from '@teamturing/icons';
 *   import { SearchIcon as LucideSearchIcon } from '@teamturing/icons/lucide';
 *
 * 자사와 lucide 양쪽에 다 있는 개념이 72개라(`CalendarIcon`, `ArrowDownIcon` 등)
 * 한 파일에서 함께 쓸 때는 별칭이 필요하다. 별칭을 써도 번들에는 아무것도 더해지지 않는다.
 * 나머지 1704개는 그대로 가져다 쓰면 된다.
 *
 * 파일명은 접미사 없이 둔다(`Search.tsx`). 컴포넌트 파일은 SVGR이 svg 이름에서 직접 만들고,
 * 이름 규칙은 이 인덱스에서만 결정하는 편이 재생성할 때 흔들릴 여지가 적다.
 */
function lucideIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    return `export { default as ${basename}Icon } from './${basename}'`;
  });
  return exportEntries.join('\n');
}

module.exports = lucideIndexTemplate;
