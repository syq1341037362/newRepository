const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    module: {
        rules: [{
            test: /\.(png|svg|jpg|jpeg)$/,
            use: ['file-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            title: '页面标题',
            filename: "index.html",
            hash: true
        }),
        new OptimizeCssAssetsWebpackPlugin({}), //普通css压缩
        new UglifyjsWebpackPlugin({ //普通js压缩
            cache: true,
            parallel: true,
            sourceMap: true
        })
    ],
    // optimization: {
    //     minimizer: [
    //         new OptimizeCssAssetsWebpackPlugin({}),
    //         new UglifyjsWebpackPlugin({
    //             cache: true,
    //             parallel: true,
    //             sourceMap: true
    //         }),
    //     ],
    // },
}