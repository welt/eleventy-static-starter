// postcss.config.js
// This configuration allows some limited Sass syntax to be processed as CSS
// Uses design tokens: you can set variables as `$key: <value>` in ./tokens.json,
// then use them in the .scss files as `$key`
// https://github.com/postcss/postcss-cli
//
import { readFile } from "fs/promises";
import path from "path";
import postcssAdvancedVariables from "postcss-advanced-variables";
import postcssColorFunction from "postcss-color-function";
import postcssMpaGet from "postcss-map-get";
import postcssNested from "postcss-nested";
import postcssSortMediaQueries from "postcss-sort-media-queries";
import postcssAssets from "postcss-assets";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssHash from "postcss-hash";

const variables = JSON.parse(
  await readFile(new URL("./tokens.json", import.meta.url)),
);

const noop = () => {};

export default function (cfg) {
  const dev = cfg.env === "development";
  const scss = cfg.file.extname === ".scss";

  return {
    map: dev ? { inline: false } : false,
    parser: scss ? "postcss-scss" : false,
    plugins: [
      postcssAdvancedVariables({ variables }),
      postcssColorFunction({ preserveCustomProps: true }),
      postcssMpaGet(),
      postcssNested(),
      postcssSortMediaQueries(),
      postcssAssets({ loadPaths: ["src/images/"] }),
      autoprefixer(),
      dev ? noop() : cssnano(),
      dev
        ? noop()
        : postcssHash({
            manifest: "./src/_data/manifest.json",
            name: ({ dir, name, hash, ext }) =>
              path.join(dir, `${name}-${hash}${ext}`),
          }),
    ],
  };
}
