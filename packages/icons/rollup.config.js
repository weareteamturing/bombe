/* eslint-disable @typescript-eslint/no-var-requires */
const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const svgr = require('@svgr/rollup');

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
  external: ['react'],
  plugins: [
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    commonjs(),
    babel({
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      babelHelpers: 'bundled',
      rootMode: 'upward',
    }),
    svgr(),
  ],
};
