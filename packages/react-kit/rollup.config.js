/* eslint-disable @typescript-eslint/no-var-requires */
const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');

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
      preserveModulesRoot: 'src',
    },
  ],
  external: ['react', 'styled-components'],
  plugins: [
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    commonjs(),
    postcss(),
    babel({
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      babelHelpers: 'bundled',
      rootMode: 'upward',
      presets: [
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
      ],
    }),
  ],
};
