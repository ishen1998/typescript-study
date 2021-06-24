const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js'
  },
  devServer: {
    open: true, // 自动打开浏览器
    compress: true, // 启动gzip压缩
    port: 3000, // 端口号
    quiet: true,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.ts?$/i,
      use: [{
        loader: 'ts-loader'
      }],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html'
    }),
    new webpack.HotModuleReplacementPlugin({
      // Options...
    })
  ]
}