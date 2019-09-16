const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    'pulseplot': path.resolve(__dirname, 'index.js'),
    'pulseplot.min': path.resolve(__dirname, 'index.js'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    //library: '$', // omitting library will result in the assignment of all properties returned by the entry point be assigned directly to the root object
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  mode: 'development',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        include: /\.min\.js$/
      })
    ]
  }
}
