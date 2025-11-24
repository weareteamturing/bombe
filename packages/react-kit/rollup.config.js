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
      interop: 'auto',
      globals: {
        'styled-components': 'styled',
        'react': 'React',
        'react-dom': 'ReactDom',
        'react/jsx-runtime': 'ReactJsxRuntime',
      },
    },
    {
      dir: 'esm',
      format: 'esm',
      interop: 'auto',
      preserveModules: true,
      preserveModulesRoot: 'src',
      globals: {
        'styled-components': 'styled',
        'react': 'React',
        'react-dom': 'ReactDom',
        'react/jsx-runtime': 'ReactJsxRuntime',
      },
    },
  ],
  external: (id) => {
    return (
      id.startsWith('react') ||
      id.startsWith('@floating-ui/') ||
      id.startsWith('framer-motion') ||
      id.startsWith('styled-components') ||
      id.startsWith('@teamturing/') ||
      id.startsWith('@primer/') ||
      id === 'react-is' ||
      id === 'react-textarea-autosize' ||
      id.startsWith('lodash.')
    );
  },
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
