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
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]', //保持打包后的图片名字和原来一样
                        outputPath: 'images/'
                    }
                },
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        optipng: {
                            enabled: false
                        },
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        // the webp option will enable WEBP
                        webp: {
                            quality: 75
                        }

                    }
                }
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            title: '页面标题',
            filename: 'index.html',
            hash: true,
            favicon: './static/logo.png', //网页的图标
            inject: 'body', // 在 body 底部引入
            minify: {
                removeAttributeQuotes: true, // 移除属性的引号
                collapseWhitespace: true, // 删除空格
                removeComments: true //移除注释
            }
        }),
        new OptimizeCssAssetsWebpackPlugin({}), //普通css压缩
        new UglifyjsWebpackPlugin({ //普通js压缩
            cache: true,
            parallel: true, //多通道并行处理
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