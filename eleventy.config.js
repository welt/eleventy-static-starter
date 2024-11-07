import dotenv from "dotenv";
dotenv.config();

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/fonts/**/*.*");
  eleventyConfig.addPassthroughCopy("./src/images/**/*.{png,jpg,webp}");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addWatchTarget("./src/scss/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
    },
    templateFormats: ["html", "hbs", "njk", "md", "11ty.js"],
  };
}
