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

const published = fs.readdirSync(path.join(LUCIDE_DIR, 'icons')).filter((f) => f.endsWith('.svg')).length;
console.log(`lucide-static v${version}: 배포 ${published}개 중 정식 이름 ${canonical.length}개를 .lucide-svg/에 모았습니다.`);
