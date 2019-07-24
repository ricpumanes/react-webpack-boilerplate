const webpack = require('webpack');
const path = require('path');

module.exports = () => {
  return {
    devtool: 'inline-source-map',
    devServer: {
      https: true,
      disableHostCheck: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      port: 3000,
    },
  };
};