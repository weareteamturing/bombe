/* eslint-disable @typescript-eslint/no-var-requires */
const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const terser = require('@rollup/plugin-terser');
const copy = require('rollup-plugin-copy');
const postcss = require('rollup-plugin-postcss');

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
      },
      {
        dir: 'esm',
        format: 'esm',
        preserveModulesRoot: 'src',
      },
      {
        dir: 'iife',
        format: 'iife',
        name: 'KatexUtils',
      },
    ],
    plugins: [
      nodeResolve({ extensions: ['.ts', '.js'] }),
      commonjs(),
      babel({ extensions: ['.ts', '.js'], babelHelpers: 'bundled', rootMode: 'upward' }),
      copy({
        targets: [
          {
            src: 'fonts/*',
            dest: ['dist/fonts', 'esm/fonts', 'iife/fonts'],
          },
        ],
      }),
      postcss({
        include: 'src/mathking-katex.css',
        extract: 'mathking-katex.css',
        minimize: true,
        sourceMap: false,
      }),
      terser(),
    ],
  },
];
