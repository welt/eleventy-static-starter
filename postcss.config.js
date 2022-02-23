/* eslint-disable global-require */
// postcss.config.js
// This configuration allows some limited Sass syntax to be processed as CSS
// Uses design tokens: you can set variables as `$key: <value>` in ./tokens.json,
// then use them in the .scss files as `$key`
// https://github.com/postcss/postcss-cli

module.exports = (cfg) => {
  const variables = require('./tokens.json');
  const dev = cfg.env === 'development';
  const scss = cfg.file.extname === '.scss';
  const path = require('path');
  const noop = () => {};
  return {
    map: dev ? { inline: false } : false,
    parser: scss ? 'postcss-scss' : false,
    plugins: [
      require('postcss-advanced-variables')({ variables }),
      require('postcss-color-function')({ preserveCustomProps: true }),
      require('postcss-map-get')(),
      require('postcss-nested')(),
      require('postcss-sort-media-queries')(),
      require('postcss-assets')({ loadPaths: ['src/images/'] }),
      require('autoprefixer')(),
      dev ? noop() : require('cssnano')(),
      dev ? noop() : require('postcss-hash')({
        manifest: './src/_data/manifest.json',
        name: ({
          dir, name, hash, ext,
        }) => path.join(dir, `${name}-${hash}${ext}`),
      }),
    ],
  };
};
