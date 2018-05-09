const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function alias(name) {
  return path.dirname(require.resolve(name));
}

module.exports = {
  entry: {
    app: './src/main.js',
  },
  resolve: {
    extensions: ['.js', '.san'],
    // fallback: [path.join(__dirname, '../node_modules')]
  },
  // resolveLoader: {
  //   fallback: [path.join(__dirname, '../node_modules')]
  // },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: ['html-loader']
    },
    {
      test: /\.san$/,
      loader: 'san-loader'
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
      ]
    },
    {
      test: /\.less$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        {
          loader: 'less-loader',
          options: {
            relativeUrls: true,
            paths: []
          }
        }
      ]
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components|dist)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      }
    },
    {
      test: /\.(png|gif|jpe?g|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name() {
              return 'assets/images/[hash].[ext]';
            }
          }
        }
      ]
    }
    ]
  }
};