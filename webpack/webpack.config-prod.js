const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devConfig = require('./webpack.config');
const TerserPlugin = require('terser-webpack-plugin');

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
      "postcss-loader",
      "sass-loader",
    ],
  };

  // include plugins
  prodConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css",
    }),
  );
  prodConfig.optimization = {
    minimize: true,
    minimizer: [new TerserPlugin()],
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