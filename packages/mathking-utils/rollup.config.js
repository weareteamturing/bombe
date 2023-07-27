/* eslint-disable @typescript-eslint/no-var-requires */
const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
    },
    {
      dir: 'esm',
      format: 'esm',
      preserveModules: true,
    },
  ],
  plugins: [
    nodeResolve({ extensions: ['.ts', '.js'] }),
    commonjs(),
    babel({ extensions: ['.ts', '.js'], babelHelpers: 'bundled', rootMode: 'upward' }),
  ],
};
