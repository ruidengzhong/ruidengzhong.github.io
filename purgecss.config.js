module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  // This state is set by JavaScript after the page loads.
  safelist: { greedy: [/data-motion/] },
  skippedContentGlobs: ["_site/assets/**/*.html"],
};
