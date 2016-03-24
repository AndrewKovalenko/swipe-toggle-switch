'use strict';

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: './example/example.jsx',
  output: {
    path: './example',
    filename: 'example.js'
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        },
        include: __dirname + '/example'
      } 
    ]
  }
};

