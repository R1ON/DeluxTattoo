module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
          options: {
            name: 'fonts/[name].[ext]'
          }
        },
        {
          test: /\.(ttf|eot)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      ]
    }
  };
};
