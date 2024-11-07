# Eleventy Static Site Starter Project

11ty v3 + ESM + Rollup + PostCSS + ESLint v9

+ tested in Node 20, should work in Node 18

+ builds to `_site` folder

+ uses `tokens.json` for global variables

+ uses `rollup.config.js` for JS bundling, including iife and esm formats

## Quick start

+ copy `.env.example` to `.env` (.env.CANONICAL is usually the URL of the deployment environment)

+ edit `tokens.json`

+ npm install

+ npm start

or

+ npm run build

## Eleventy docs

[https://www.11ty.dev/docs/](https://www.11ty.dev/docs/)

+ Thanks to Bryce Wray for publishing these articles on cache-busting in Eleventy [https://www.brycewray.com/posts/2020/12/hashing-out-cache-busting-fix-eleventy/](https://www.brycewray.com/posts/2020/12/hashing-out-cache-busting-fix-eleventy/)
