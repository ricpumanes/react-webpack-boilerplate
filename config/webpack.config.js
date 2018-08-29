const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.resolve(__dirname, '../src');

const webpackConfig = env => {
  return {
    context: srcPath,
    entry: {
      bundle: [
        '@babel/polyfill',
        'react-hot-loader/patch',
        path.join(srcPath, './index.js'),
      ],
    },
    output: {
      path: path.resolve(__dirname, '../build'),
      filename: '[name].[hash].bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ],
        }
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'React & Webpack Boilerplate',
        filename: 'index.html',
        template: path.resolve(__dirname, '../public/index.html'),
        showErrors: true,
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.EnvironmentPlugin({
        NODE_ENV: env.NODE_ENV,
      }),
    ],
    devServer: {
      hot: true,
      https: true,
      disableHostCheck: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      port: 3000,
    },
  };
};

module.exports = webpackConfig;
