const path = require('path');

module.exports = {
  devtool : "eval-source-map",
  entry : "./src/index.js",
  output : {
    filename : "./build/build.js"
  },
  module : {
    rules : [
      {
        test : /\.(css|less|sass)$/,
        use : ['style-loader', 'css-loader']
      },
      {
        test : /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use : 'url-loader?limi=8192'
      },
//    {
//      test : /\.js$/,
//      exclude : './node_modules/',
//      use : [
//        {
//          loader : 'babel-loader',
//          options : {
//            presets : [['es2015', {module : false}]],
//            cacheDirectory : true
//          }
//        }
//      ],
//    }
    ]
  },
  resolve : {
    extensions : ['.js', 'jsx']
  },
  devServer : {
    contentBase : './dist',
    historyApiFallback : true,
    hot : true,
    inline : true,
    port : 8080
  },
  plugins : [
  
  ]
};
