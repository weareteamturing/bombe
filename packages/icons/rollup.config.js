/* eslint-disable @typescript-eslint/no-var-requires */
const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const svgr = require('@svgr/rollup');

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
const entry = (input, cjsDir) => ({
  input,
  output: [
    {
      dir: cjsDir,
      format: 'cjs',
    },
    {
      dir: 'esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  external: ['react'],
  plugins: plugins(),
});

module.exports = [entry('src/index.ts', 'dist'), entry('src/lucide/index.ts', 'dist/lucide')];
