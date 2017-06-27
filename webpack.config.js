var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/helloworld.ts',
  resolve: {
        extensions: ['.webpack.js', '.web.js', '.js', '.ts']
  },
  module: {
   rules: [
     {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
     }
   ]
 },
 output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/'
 },
 devServer: {
   contentBase: './dist/',
   publicPath: './dist/'
 },
 // Enable sourcemaps for debugging webpack's output.
 devtool: 'source-map',
 
};