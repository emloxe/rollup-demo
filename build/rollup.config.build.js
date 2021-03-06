import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import copyright from './copyrightHeader';

import config from './config';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    name: config.name,
    format: 'umd',
    sourcemap: 'inline',
    globals: {
      $: '$',
    },
    banner: copyright,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    json(),
    // postcss({
    //   plugins: [
    //     simplevars(),
    //   ],
    //   extensions: ['.css'],
    // }),
  ],
};
