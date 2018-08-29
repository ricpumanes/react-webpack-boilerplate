const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devConfig = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = env => {
  const prodConfig = { ...devConfig(env) };
  // remove devServer
  delete prodConfig.devServer;

  // remove 'style-loader' and replace with MiniCssExtractPlugin
  prodConfig.module.rules[1] = {
    test: /\.css$/,
    use: [
      { loader: MiniCssExtractPlugin.loader },
      'css-loader',
    ],
  };
  prodConfig.module.rules[2] = {
    test: /\.(scss|sass)$/,
    use: [
      { loader: MiniCssExtractPlugin.loader },
      "css-loader",
      "sass-loader",
    ],
  };

  // include plugins
  prodConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  );
  prodConfig.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        parallel: 10,
      }),
    ],
  };

  return prodConfig;
};

module.exports = config;