const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devConfig = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const VENDOR_LIBS = [
  'react',
  'react-dom',
  'prop-types',
];

const config = env => {
  const prodConfig = { ...devConfig(env) };
  // remove devServer
  delete prodConfig.devServer;

  // add vendor entry
  prodConfig.entry.vendor = VENDOR_LIBS;

  // add output chunk
  prodConfig.output.chunkFilename = '[name].bundle.js';

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
      "postcss-loader", // add vendor prefixes to your css
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
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        },
      }
    },
  };

  // performance monitor settings
  prodConfig.performance = { hints: false };

  return prodConfig;
};

module.exports = config;