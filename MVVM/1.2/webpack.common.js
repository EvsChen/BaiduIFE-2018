const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
      app: './src/index.js',
  },
  plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
          title: 'Output management'
      }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          {
              test:/\.css$/,
              use: [
                  'style-loader',
                  'css-loader'
              ]
          },
          {
              test:/\.js$/,
              exclude: /(node_modules|bower_components)/,
              use:{
                  loader: 'babel-loader',
                  options:{
                      presets: ['babel-preset-env']
                  }
              }
          }
      ]
  }
};