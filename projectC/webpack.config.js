const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    main: './main.js'
  },
  target: ['web', 'es5'],
  // resolve: {
  //     alias: {
  //         crypto: false,
  //         stream: false,
  //         assert: false,
  //         http: false,
  //         https: false,
  //         util: false,
  //         path: false,
  //         vm: false,
  //         console: false,
  //         tty: false,
  //         fs: false,
  //         os: false,
  //     }
  // },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: "http://localhost:3002/"
  },
  plugins: [
    new webpack.DefinePlugin({
      global: 'window',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new ModuleFederationPlugin({
      filename: "remoteEntry.js",
      name: "projectC",
      exposes: {
        "./watcher": './watcher'
      }
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    compress: true, // gzip
    hot: true, // 热重载
    host: "0.0.0.0",
    port: 3002
  }
}