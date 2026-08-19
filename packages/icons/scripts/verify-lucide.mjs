/**
 * 생성된 lucide 컴포넌트를 검사한다. 어긋나면 종료 코드 1.
 *
 * 특히 대소문자 충돌 검사가 중요하다. macOS의 APFS는 대소문자를 구분하지 않아
 * `Foo.tsx`와 `foo.tsx`가 같은 파일로 취급된다. 그런 쌍이 생기면 SVGR은 아무 경고 없이
 * 한쪽을 다른 쪽으로 덮어쓰고, index.ts에는 두 이름이 모두 남아 존재하지 않는 파일을 가리킨다.
 * Linux CI에서는 재현되지 않으므로 로컬에서 잡아야 한다.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PKG_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC_DIR = path.join(PKG_DIR, 'src', 'lucide');

const require = (await import('node:module')).createRequire(import.meta.url);
const canonical = Object.keys(require('lucide-static/icon-nodes.json'));

const errors = [];
const check = (ok, message) => {
  if (!ok) errors.push(message);
};

const files = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith('.tsx'));

check(
  files.length === canonical.length,
  `컴포넌트 수가 맞지 않습니다: ${files.length}개 생성 / icon-nodes.json ${canonical.length}개`,
);

/** 대소문자만 다른 파일 — macOS에서 조용히 덮어쓰기가 일어난 흔적 */
const byLower = new Map();
for (const f of files) {
  const key = f.toLowerCase();
  if (byLower.has(key)) errors.push(`대소문자 충돌: ${byLower.get(key)} / ${f}`);
  else byLower.set(key, f);
}

/** index.ts의 export 이름 중복 — 중복되면 TS2300으로 컴파일이 깨진다 */
const index = fs.readFileSync(path.join(SRC_DIR, 'index.ts'), 'utf8');
const exports = [...index.matchAll(/export \{ default as (\w+) \} from '\.\/(\w+)'/g)].map((m) => ({
  name: m[1],
  file: m[2],
}));
const exportNames = exports.map((e) => e.name);
check(
  exportNames.length === canonical.length,
  `index.ts의 export 수가 맞지 않습니다: ${exportNames.length}개 / ${canonical.length}개`,
);
const seen = new Set();
for (const name of exportNames) {
  if (seen.has(name)) errors.push(`export 이름 중복: ${name}`);
  seen.add(name);
}

/**
 * index.ts가 가리키는 파일이 실제로 있는가.
 * export 이름(`SearchIcon`)과 파일명(`Search.tsx`)이 다르므로 from 절의 경로로 확인한다.
 */
for (const { name, file } of exports) {
  if (!fs.existsSync(path.join(SRC_DIR, `${file}.tsx`))) {
    errors.push(`${name}이 없는 파일을 가리킵니다: ${file}.tsx`);
  }
}

/** 접미사 규칙이 지켜졌는가 — 템플릿이 바뀌면 조용히 어긋난다 */
for (const name of exportNames) {
  if (!name.endsWith('Icon')) errors.push(`Icon 접미사가 없습니다: ${name}`);
}

/** viewBox 유실 — svgo 설정이 바뀌면 조용히 사라지고, 그러면 크기 조절이 전부 깨진다 */
for (const f of files) {
  const source = fs.readFileSync(path.join(SRC_DIR, f), 'utf8');
  if (!source.includes('viewBox=')) errors.push(`viewBox가 없습니다: ${f}`);
}

if (errors.length > 0) {
  console.error(`lucide 검증 실패 (${errors.length}건)`);
  for (const e of errors.slice(0, 20)) console.error(`  - ${e}`);
  if (errors.length > 20) console.error(`  ... 외 ${errors.length - 20}건`);
  process.exit(1);
}

console.log(`lucide 검증 통과: 컴포넌트 ${files.length}개, export ${exportNames.length}개, 중복 0, viewBox 유실 0`);
