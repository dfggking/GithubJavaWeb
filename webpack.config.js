const path = require('path');
console.info(__dirname);
console.info(path.resolve(__dirname, 'dist'));
const config = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {test: /\.txt$/, use: 'raw-loader'}
    ]
  }
};




module.exports = config;