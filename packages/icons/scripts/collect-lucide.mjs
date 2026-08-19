/**
 * lucide 원본 svg를 화이트리스트로 걸러 임시 디렉토리에 모은다.
 *
 * 원본을 리포에 커밋하지 않는 이유:
 * `packages/react-native-kit/script/gen_icon.sh`가 `svg/`의 하위 폴더를 발견하면
 * 그 안의 svg를 전부 `svg/` 바로 아래로 옮기고 폴더를 지운다. `svg/lucide/`를 만들면
 * lucide의 search.svg가 디자이너의 search.svg를 덮어쓴다. 조용히, 자동으로.
 * 그래서 원본은 `lucide-static` 의존성에서 그때그때 읽고, 리포에는 생성된 tsx만 남긴다.
 *
 * 화이트리스트로 `icon-nodes.json`을 쓰는 이유:
 * lucide가 배포하는 svg에는 별칭이 섞여 있다(`trash-2.svg`와 `delete.svg`가 같은 그림).
 * 전부 변환하면 export 이름이 겹쳐 TS2300이 나고, 대소문자만 다른 쌍은 macOS APFS에서
 * 에러 없이 한쪽이 다른 쪽을 덮어써 로컬과 CI 결과가 갈린다.
 * `icon-nodes.json`은 별칭 없이 정식 이름만 담고 있어 이 문제를 원천 차단한다.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PKG_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(PKG_DIR, '.lucide-svg');

const require = (await import('node:module')).createRequire(import.meta.url);
const LUCIDE_DIR = path.dirname(require.resolve('lucide-static/package.json'));
const { version } = require('lucide-static/package.json');

const canonical = Object.keys(require('lucide-static/icon-nodes.json'));

/** 이전 실행의 잔재가 남으면 제거된 아이콘이 계속 살아남는다 */
fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

const missing = [];
for (const name of canonical) {
  const src = path.join(LUCIDE_DIR, 'icons', `${name}.svg`);
  if (!fs.existsSync(src)) {
    missing.push(name);
    continue;
  }
  fs.copyFileSync(src, path.join(OUT_DIR, `${name}.svg`));
}

if (missing.length > 0) {
  console.error(`icon-nodes.json에는 있지만 svg가 없는 아이콘 ${missing.length}개: ${missing.join(', ')}`);
  process.exit(1);
}

/**
 * lucide의 라이선스 전문을 패키지에 함께 싣는다.
 *
 * ISC는 "저작권 표시와 허가 문구가 모든 사본에 나타날 것"을 조건으로 한다. 그런데 SVGO가
 * 변환 과정에서 원본 svg의 `<!-- @license ... -->` 주석을 지우기 때문에, 생성된 컴포넌트에는
 * 아무 표시도 남지 않는다. 그래서 여기서 별도 파일로 옮겨 둔다.
 *
 * lucide의 LICENSE에는 ISC 외에 두 번째 절이 있다. `search`, `check`처럼 Feather 프로젝트에서
 * 파생된 약 110개는 Cole Bemis의 MIT를 따른다. 전문을 그대로 옮기므로 그쪽도 함께 유지된다.
 *
 * 손으로 옮겨 적지 않고 설치된 패키지에서 읽는 이유는, lucide 버전을 올릴 때 저작권 연도나
 * Feather 목록이 바뀌어도 `yarn svgr:lucide` 한 번으로 따라오게 하기 위해서다.
 */
const NOTICE_FILE = path.join(PKG_DIR, 'THIRD-PARTY-NOTICES.md');
const licenseText = fs.readFileSync(path.join(LUCIDE_DIR, 'LICENSE'), 'utf8').trimEnd();

fs.writeFileSync(
  NOTICE_FILE,
  [
    '# Third-party notices',
    '',
    '`@teamturing/icons` 자체는 MIT입니다. 아래는 이 패키지에 포함된 외부 저작물의 라이선스입니다.',
    '',
    '## lucide',
    '',
    `\`@teamturing/icons/lucide\`로 제공되는 아이콘 ${canonical.length}개는 [lucide](https://lucide.dev)에서`,
    `파생됐습니다 (\`lucide-static\` v${version}). 원본 svg를 SVGR로 React 컴포넌트로 변환한 것 외에`,
    '형태를 바꾸지 않았습니다.',
    '',
    '아래는 lucide가 배포하는 LICENSE 전문입니다. 두 번째 절은 lucide 중 Feather 프로젝트에서',
    '파생된 아이콘에 적용됩니다.',
    '',
    '```',
    licenseText,
    '```',
    '',
    '> 이 파일은 `scripts/collect-lucide.mjs`가 생성합니다. 직접 고치지 마세요.',
    '',
  ].join('\n'),
);

const published = fs.readdirSync(path.join(LUCIDE_DIR, 'icons')).filter((f) => f.endsWith('.svg')).length;
console.log(`lucide-static v${version}: 배포 ${published}개 중 정식 이름 ${canonical.length}개를 .lucide-svg/에 모았습니다.`);
console.log(`라이선스 전문을 ${path.basename(NOTICE_FILE)}에 기록했습니다.`);
