const path               = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const webpack            = require('webpack')
module.exports           = {
  entry  : {
    polyfills: './src/polyfill.js',
    app      : './src/index.js'
  },
  module : {
    rules: [
      {
        test   : /\.js$/,
        exclude: /(node_modules)/,
        use    : {
          loader: 'babel-loader'
        }
      }, {
        test: /\.(png|jpg|gif)$/,
        use : [
          {
            loader : 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production',
      template:'./index.html'
    }),
    new webpack.ProvidePlugin({
      _: ['lodash', 'join']
    })
  ],
  output : {
    filename: '[name].bundle.js',
    path    : path.resolve(__dirname, 'dist')
  }
}