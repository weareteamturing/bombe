// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/**
 * lucide는 자사 템플릿과 달리 `Icon` 접미사를 붙이지 않는다.
 *
 *   import { SearchIcon } from '@teamturing/icons';
 *   import { Search } from '@teamturing/icons/lucide';
 *
 * 접미사를 붙이면 양쪽 다 `SearchIcon`이 되어 함께 쓸 때마다 `as` 별칭이 필요하다.
 * 접미사가 없으면 별칭 없이 나란히 쓸 수 있고, lucide 공식 문서의 이름과도 일치한다.
 */
function lucideIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    return `export { default as ${basename} } from './${basename}'`;
  });
  return exportEntries.join('\n');
}

module.exports = lucideIndexTemplate;
