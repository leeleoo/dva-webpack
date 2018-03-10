const webpack           = require('webpack')
const merge             = require('webpack-merge')
const UglifyJSPlugin    = require('uglifyjs-webpack-plugin')
const common            = require('./webpack.common.js')
const path              = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  mode   : 'production',
  devtool: 'source-map',
  module : {
    rules: [
      {
        test: /\.less$/,
        use : ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use     : [
                {
                  loader : 'css-loader',// translates CSS into CommonJS
                  options: {
                    modules: true,
                    localIdentName: '[name]__[local]-[hash:base64:5]'
                  }
                }, {
                  loader: 'postcss-loader'
                }, {
                  loader: 'less-loader' // compiles Less to CSS
                }
              ]
            }
        )
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ],
  output : {
    filename: '[name].[chunkhash].js',
    path    : path.resolve(__dirname, 'dist')
  }
})