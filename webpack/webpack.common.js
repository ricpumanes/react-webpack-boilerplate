const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.resolve(__dirname, '../src');

module.exports = ({ site, NODE_ENV }) => {
  return {
    name: site,
    context: srcPath,
    entry: {
      bundle: [
        '@babel/polyfill',
        path.join(srcPath, './index.js'),
      ],
    },
    output: {
      path: path.resolve(__dirname, `../build/${site}`),
      filename: '[name].[hash].js',
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
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              },
            },
            'postcss-loader', // add a vendor prefixes to your css
          ],
        },
        {
          test: /\.(scss|sass)$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true // enable sourcemapping in dev only for debugging
              }
            },
            'postcss-loader', // add a vendor prefixes to your sass
            {
              loader: "sass-loader",
              options: {
                sourceMap: true, // enable sourcemapping in dev only debugging
              }
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico)$/,
          use: [
            'url-loader?limit=10000',
            {
              loader: 'image-webpack-loader',
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: false,
                },
                optipng: {
                  optimizationLevel: 7,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4,
                },
              },
            }
          ]
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: 'file-loader'
        },
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?prefix=font/&limit=5000'
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: 'url-loader?limit=10000&mimetype=application/octet-stream'
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'React & Webpack Boilerplate',
        filename: 'index.html',
        template: path.resolve(__dirname, '../public/index.html'),
        showErrors: true,
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: NODE_ENV,
      }),
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        Assets: path.resolve(__dirname, '../public/assets/'),
        RootDir: path.resolve(__dirname, '../src/'),
      },
    }
  };
};
