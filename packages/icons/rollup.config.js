/* eslint-disable @typescript-eslint/no-var-requires */
const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const svgr = require('@svgr/rollup');

const { version: LUCIDE_VERSION } = require('lucide-static/package.json');

const plugins = () => [
  nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
  commonjs(),
  babel({
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    babelHelpers: 'bundled',
    rootMode: 'upward',
  }),
  svgr(),
];

/**
 * 엔트리마다 독립된 설정을 만든다.
 *
 * 하나의 설정에 input을 둘 넣으면 rollup이 코드 스플리팅으로 전환하면서 두 엔트리가
 * babel 헬퍼(`_extends`) 청크를 공유하게 된다. 청크 자체는 447 B로 작지만, 아이콘 하나하나가
 * 지역 함수 대신 import 바인딩을 거치게 되어 자사 CJS 엔트리가 7KB 늘어난다.
 * lucide를 쓰지 않는 사용처가 부담할 이유가 없는 비용이라 빌드를 둘로 나눈다.
 *
 * `preserveModulesRoot`는 두 빌드가 같은 `esm/`에 쓰면서도 소스 구조를 유지하게 한다
 * (`src/lucide/Search.tsx` → `esm/lucide/Search.js`). 지정하지 않으면 rollup이 각 빌드의
 * 공통 조상을 따로 계산해 lucide 쪽이 `esm/` 바로 아래로 평탄화된다.
 */
const entry = (input, cjsDir, banner) => ({
  input,
  output: [
    {
      dir: cjsDir,
      format: 'cjs',
      banner,
    },
    {
      dir: 'esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      banner,
    },
  ],
  external: ['react'],
  plugins: plugins(),
});

/**
 * lucide 산출물에 붙는 저작권 표시.
 *
 * ISC는 저작권 표시와 허가 문구가 모든 사본에 나타날 것을 조건으로 한다. 패키지에는
 * `THIRD-PARTY-NOTICES.md`로 전문을 싣지만, 소비처가 번들링하면 그 파일은 따라가지 않는다.
 * 그래서 코드 자체에도 출처를 남긴다.
 *
 * 엔트리뿐 아니라 모든 모듈에 붙인다. 트리셰이킹이 배럴(`index.js`)을 걷어내면 거기 붙은
 * 표시도 함께 사라지므로, 엔트리에만 붙이면 정작 아이콘을 골라 쓰는 흔한 경우에 표시가
 * 남지 않는다. 상류인 `lucide-react`도 아이콘 파일마다 같은 배너를 붙인다.
 *
 * `@license`가 들어간 주석은 terser·esbuild가 기본 설정에서 보존하므로 프로덕션 번들까지
 * 살아남는다.
 */
const LUCIDE_BANNER = `/**
 * @license lucide v${LUCIDE_VERSION} - ISC
 *
 * Copyright (c) Lucide Icons and Contributors
 * Some icons are derived from Feather (MIT), copyright (c) 2013-present Cole Bemis.
 * See THIRD-PARTY-NOTICES.md in this package for the full license text.
 */`;

module.exports = [
  entry('src/index.ts', 'dist'),
  entry('src/gpai/index.ts', 'dist/gpai'),
  /**
   * `_virtual/`은 두 빌드가 공유하는 babel 헬퍼라 lucide 것이 아니다. 여기에 배너를 붙이면
   * 자사 아이콘만 쓰는 번들에도 lucide 표시가 딸려 들어간다(두 빌드가 같은 파일을 쓰고
   * lucide 쪽이 나중에 덮어쓰기 때문). 잘못된 출처 표시이므로 제외한다.
   */
  entry('src/lucide/index.ts', 'dist/lucide', (chunk) => (chunk.fileName.includes('_virtual') ? '' : LUCIDE_BANNER)),
];
