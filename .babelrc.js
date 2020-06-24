const presets = ["@babel/preset-env", "@babel/preset-react"];
const plugins = ["@babel/plugin-proposal-class-properties"];
const env = {
  test: {
    plugins: ["@babel/plugin-transform-runtime"],
  },
};

module.exports = { presets, plugins, env };
