const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: {
      app: {
        name: 'Google Chrome',
      },
    },
    static: './src',
  },
});
