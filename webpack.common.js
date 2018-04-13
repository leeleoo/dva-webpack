const path               = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const webpack            = require('webpack')
module.exports           = {
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
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title   : 'Production',
      template: './index.html'
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