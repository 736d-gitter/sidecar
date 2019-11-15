const path = require('path');
const webpack = require('webpack');
const productionConfig = require('./webpack.production.config');

var port = parseInt(process.env.PORT, 10) + 1 || 3001;

module.exports = (function () {
  return {
    ...productionConfig,
    devtool: 'eval',
    entry: [
      'webpack-dev-server/client?http://localhost:' + port,
      'webpack/hot/only-dev-server',
      path.join(__dirname, './src/js/index')
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };
})();
