var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var variable = require('./variable');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: '/',
    contentBase : ["dist","assets"], 
    hot: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    proxy : {
        "/userinfo" : variable.proxy_dev,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization, application/x-www-form-urlencoded"
    },
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
}).listen(variable.port, variable.host_name, function (err) {
    if (err) {
        console.log(err);
    }

  console.log('Listening at :' + variable.host_name + ':' + variable.port);
});