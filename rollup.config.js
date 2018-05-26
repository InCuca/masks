// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    file: 'dist/text-mask-collection.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/text-mask-core/dist/textMaskCore.js': ['conformToMask'],
      },
    }),
    babel({
      presets: [
        [
          'env',
          {
            modules: false,
          },
        ],
      ],
      plugins: ['external-helpers'],
      babelrc: false,
      exclude: 'node_modules/**', // only transpile our source code
    }),
  ],
};
