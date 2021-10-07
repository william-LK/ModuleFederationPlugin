const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main: './main.js'
    },
    output: {
        publicPath: "http://localhost:3001/"
    },
    resolve: {
        extensions: [".vue", ".js", "json"]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new ModuleFederationPlugin({
            filename: 'teamB.js', // 入口文件
            name: 'teamB', // 模块名字
            remotes: {
                projectC: "projectC@http://localhost:3002/remoteEntry.js",
            },
            exposes: { // 暴露文件
                "./componentA": "./componentA",
                "./componentB": "./componentB"
            }
        })
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
        port: 3001
    }
}