const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        main: './main.js'
    },
    target: ['web', 'es5'],
    resolve: {
        alias: {
            crypto: false,
            stream: false,
            assert: false,
            http: false,
            https: false,
            util: false,
            path: false,
            vm: false,
            console: false,
            tty: false,
            fs: false,
            os: false,
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: "http://localhost:3000"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new ModuleFederationPlugin({
            filename: "teamA.js",
            name: "teamA",
            remotes: {
                teamB: "teamB@http://localhost:3001/teamB.js",
            },
        }),
    ],
    devServer: {
        compress: true, // gzip
        hot: true, // 热重载
        port: 3000
    }
}