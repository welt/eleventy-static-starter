require('dotenv').config();
const sitemap = require('@quasibit/eleventy-plugin-sitemap');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/fonts/**/*.*');
  eleventyConfig.addPassthroughCopy('./src/images/**/*.{png,jpg,webp}');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addWatchTarget('./src/js/');
  eleventyConfig.addWatchTarget('./src/scss/');
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: `${process.env.CANONICAL}`,
    },
  });
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
    },
    templateFormats: ['html', 'hbs', 'njk', 'md', '11ty.js'],
  }
};
