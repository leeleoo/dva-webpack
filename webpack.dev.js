const merge    = require('webpack-merge')
const common   = require('./webpack.common.js')
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
              modules: true
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
    contentBase: './dist'
  }
})