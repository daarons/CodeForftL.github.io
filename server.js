var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

config.entry.splice(0, 0, 'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());

var webpackDevServer = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
});



webpackDevServer.listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
