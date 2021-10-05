const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main: './main.js'
    },
    output: {
        publicPath: "http://localhost:3001/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new ModuleFederationPlugin({
            filename: 'teamB.js',
            name: 'teamB',
            exposes: {
                "./componentA": "./componentA",
                "./componentB": "./componentB"
            }
        })
    ],
    devServer: {
        compress: true, // gzip
        hot: true, // 热重载
        port: 3001
    }
}