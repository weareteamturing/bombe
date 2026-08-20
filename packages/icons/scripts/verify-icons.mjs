/**
 * SVGR이 만든 자사 아이콘을 검사한다. 어긋나면 종료 코드 1.
 *
 * 루트(`src/`)와 브랜드 폴더(`src/gpai/` 등)를 함께 본다.
 * lucide는 원본이 npm 의존성이라 검사 항목이 다르므로 `verify-lucide.mjs`가 따로 맡는다.
 *
 * 여기서 잡는 것은 전부 "조용히 어긋나는" 종류다. 빌드도 타입 체크도 통과하는데
 * 런타임에서만 티가 나거나, 로컬과 CI에서 결과가 갈리는 것들.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PKG_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC_DIR = path.join(PKG_DIR, 'src');

/**
 * 검사 대상. 루트는 동결된 291개라 새로 깨질 일이 없지만, 회귀를 잡기 위해 함께 본다.
 * 브랜드 폴더가 늘어나면(`aisaac` 등) 여기에 이름만 추가하면 된다.
 */
const TARGETS = [
  { label: 'src', dir: SRC_DIR, checkHardcodedColor: false },
  { label: 'src/gpai', dir: path.join(SRC_DIR, 'gpai'), checkHardcodedColor: true },
];

const errors = [];
const warnings = [];

for (const { label, dir, checkHardcodedColor } of TARGETS) {
  if (!fs.existsSync(dir)) {
    errors.push(`${label}/ 디렉토리가 없습니다`);
    continue;
  }

  /** 하위 디렉토리는 각자 자기 항목에서 검사하므로 `.tsx`만 걸러 자연히 제외한다 */
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.tsx'));

  /**
   * 대소문자만 다른 파일 — macOS의 APFS는 대소문자를 구분하지 않아 `Foo.tsx`와 `foo.tsx`가
   * 같은 파일이 된다. SVGR은 경고 없이 한쪽을 덮어쓰고, index.ts에는 두 이름이 다 남아
   * 없는 파일을 가리킨다. Linux CI에서는 재현되지 않으므로 로컬에서 잡아야 한다.
   */
  const byLower = new Map();
  for (const f of files) {
    const key = f.toLowerCase();
    if (byLower.has(key)) errors.push(`${label}: 대소문자 충돌 — ${byLower.get(key)} / ${f}`);
    else byLower.set(key, f);
  }

  const indexPath = path.join(dir, 'index.ts');
  if (!fs.existsSync(indexPath)) {
    errors.push(`${label}/index.ts가 없습니다`);
    continue;
  }

  const index = fs.readFileSync(indexPath, 'utf8');
  const exports = [...index.matchAll(/export \{ default as (\w+) \} from '\.\/(\w+)'/g)].map((m) => ({
    name: m[1],
    file: m[2],
  }));

  if (exports.length !== files.length) {
    errors.push(`${label}: export ${exports.length}개 / 컴포넌트 파일 ${files.length}개 — 수가 맞지 않습니다`);
  }

  /** export 이름 중복 — 중복되면 TS2300으로 컴파일이 깨진다 */
  const seen = new Set();
  for (const { name } of exports) {
    if (seen.has(name)) errors.push(`${label}: export 이름 중복 — ${name}`);
    seen.add(name);
  }

  for (const { name, file } of exports) {
    /** export 이름(`SearchIcon`)과 파일명(`Search.tsx`)이 다르므로 from 절의 경로로 확인한다 */
    if (!files.includes(`${file}.tsx`)) errors.push(`${label}: ${name}이 없는 파일을 가리킵니다 — ${file}.tsx`);
    /** 접미사 규칙 — 템플릿이 바뀌면 조용히 어긋난다 */
    if (!name.endsWith('Icon')) errors.push(`${label}: Icon 접미사가 없습니다 — ${name}`);
  }

  for (const f of files) {
    const source = fs.readFileSync(path.join(dir, f), 'utf8');

    /** viewBox 유실 — svgo 설정이 바뀌면 조용히 사라지고, 그러면 크기 조절이 전부 깨진다 */
    if (!source.includes('viewBox=')) errors.push(`${label}: viewBox가 없습니다 — ${f}`);

    /**
     * 색을 하드코딩한 아이콘은 `color`를 상속하지 못한다. 디자이너 export에서 자주 나는 실수인데,
     * 화면에 그려지긴 하므로 리뷰에서 놓치기 쉽다.
     *
     * 다만 여러 색으로 그려진 아이콘(브랜드 로고, 일러스트성 아이콘)은 하드코딩이 맞다.
     * 이름으로 구분할 수 없으니 실패시키지 않고 경고만 남긴다.
     */
    if (checkHardcodedColor && /#[0-9a-fA-F]{3,8}\b/.test(source)) {
      warnings.push(`${label}: 색이 하드코딩돼 있습니다 — ${f} (여러 색 아이콘이면 무시해도 됩니다)`);
    }
  }
}

for (const w of warnings) console.warn(`  ! ${w}`);

if (errors.length > 0) {
  console.error(`자사 아이콘 검증 실패 (${errors.length}건)`);
  for (const e of errors.slice(0, 20)) console.error(`  - ${e}`);
  if (errors.length > 20) console.error(`  ... 외 ${errors.length - 20}건`);
  process.exit(1);
}

const counts = TARGETS.filter(({ dir }) => fs.existsSync(dir))
  .map(({ label, dir }) => `${label} ${fs.readdirSync(dir).filter((f) => f.endsWith('.tsx')).length}개`)
  .join(', ');
console.log(`자사 아이콘 검증 통과: ${counts}${warnings.length > 0 ? ` (경고 ${warnings.length}건)` : ''}`);
