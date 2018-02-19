const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const css = require('./webpack/css');
const sass = require('./webpack/sass');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const js = require('./webpack/js');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const common = merge([
  {
    entry: {
      index: `${PATHS.source}/scripts/index.js`,
      app: 'react-hot-loader/patch'
    },
    output: {
      path: PATHS.build,
      filename: 'js/[name].js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index', 'common'],
        template: `${PATHS.source}/views/index.html`
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  },
  js(),
  images(),
  fonts()
]);

module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common,
      extractCSS(),
      uglifyJS()
    ]);
  }
  if (env === 'development') {
    return merge([
      common,
      devserver(),
      sass(),
      css()
    ]);
  }
};
