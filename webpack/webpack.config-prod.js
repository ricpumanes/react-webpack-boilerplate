const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const VENDOR_LIBS = [
  'react',
  'react-dom',
  'prop-types',
];

module.exports = () => {
  return {
    entry: {
      vendor: VENDOR_LIBS,
    },
    output: {
      chunkFilename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            'css-loader',
          ],
        },
        {
          test: /\.(scss|sass)$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            "css-loader",
            "postcss-loader", // add vendor prefixes to your css
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
    optimization: {
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
    },
  };
};
