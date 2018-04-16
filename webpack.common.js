const path              = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack           = require('webpack')
const { NODE_ENV }      = process
const global            = {}
if (NODE_ENV === 'prod') {
  global.__BASEURL__ = ''
} else if (NODE_ENV === 'dev') {
  global.__BASEURL__ = ''
}
module.exports = {
  entry  : {
    polyfills: './src/polyfill.js',
    app      : './src/index.js'
  },
  resolve: {
    alias: {
      utils     : path.resolve(__dirname, 'src/utils'),
      components: path.resolve(__dirname, 'src/components')
    }
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
      }
    
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title   : 'Production',
      template: './index.html'
    }),
    new webpack.ProvidePlugin(global)
  ],
  output : {
    filename: '[name].bundle.js',
    path    : path.resolve(__dirname, 'dist')
  }
}