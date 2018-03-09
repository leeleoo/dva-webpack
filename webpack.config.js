const path              = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Clean             = require('clean-webpack-plugin')
const webpack           = require('webpack')
module.exports          = {
  mode     : 'production',
  devServer: {
    contentBase: './dist'
  },
  entry    : {
    index : './src/index.js',
    second: './src/second.js'
  },
  output   : {
    filename: '[name].bundle.js',
    path    : path.resolve(__dirname, 'dist')
  },
  plugins  : [
    new Clean(['dist']),
    new HtmlWebpackPlugin({
      title: 'test'
    })
  ]
  
}