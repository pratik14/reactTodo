var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /.js?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: './'
  }
};
