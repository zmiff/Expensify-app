const path = require('path');

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename:'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        { loader: 'babel-loader' }
      ]
    }, {
      test: /\.s?css/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
   },
   devtool: 'cheap-module-eval-source-map',
   devServer: {
     contentBase: path.join(__dirname, 'public'),
     historyApiFallback: true
   }
};
