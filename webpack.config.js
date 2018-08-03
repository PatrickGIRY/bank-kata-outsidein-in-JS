const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  context: __dirname + "/src",
  entry: [ 'webpack-dev-server/client?http://127.0.0.1:8080/'
         , 'webpack/hot/only-dev-server'
         , './app.js'
  ],
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  resolve: {
       modules: ["node_modules", "src"],
       extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env']
            }
          }
        ]
      }
    ],
  },
  plugins: [ new HtmlWebpackPlugin({
              template: path.join( __dirname + "/src", 'index.html'),
              title: 'Bank kata',
              filename: 'index.html',
              hash: true
            })
           , new HotModuleReplacementPlugin()
           , new NamedModulesPlugin()
  ]
}
