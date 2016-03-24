'use strict';

var nodeExternals = require('webpack-node-externals');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: './src/js/index.jsx',
  output: {
    path: './build',
    filename: 'swipe-toggle-switch.js',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015'],
          plugins: ['add-module-exports']
        },
        include: __dirname + '/src'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  }
};
