const merge    = require('webpack-merge')
const common   = require('./webpack.common.js')
const webpack  = require('webpack')
process.
module.exports = merge(common, {
  mode     : 'development',
  devtool  : 'source-map',
  module   : {
    rules: [
      {
        test: /\.less$/,
        use : [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader : 'css-loader',// translates CSS into CommonJS
            options: {
              modules       : true,
              localIdentName: '[name]__[local]'
            }
          }, {
            loader: 'postcss-loader'
          }, {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      }
    ]
  },
  devServer: {
    hot               : true,
    inline            : true,
    historyApiFallback: true,
    host              : 'localhost',
    port              : '8080'
  },
  plugins  : [
    new webpack.HotModuleReplacementPlugin()
  ]
})
