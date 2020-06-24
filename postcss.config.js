// Config for Post CSS
module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("cssnano"),
    require("css-mqpacker"),
  ],
};
