const path = require('path')
const WebapckMerge = require('webpack-merge')
const BaseConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')



const devMode = process.env.NODE_ENV !== 'production'
const dist_dir = 'dist'
module.exports = WebapckMerge(BaseConfig, {
    mode: 'production',
    output: {
        filename: 'main.[hash:6].js',
        path: path.resolve(__dirname, dist_dir)
    },
    module: {
        rules: [{
            test: /\.(sc|c|sa)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss', //微标志
                        sourceMap: true,
                        plugins: (loader) => [require('autoprefixer')({
                            browsers: [
                                "defaults",
                                "not ie < 11",
                                "last 2 versions",
                                "> 1%",
                                "iOS 7",
                                "last 3 iOS versions"
                            ]
                        })]
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash:6].css', // 配置提取出来的css名称
            chunkFilename: '[id].[hash].css'
        })
    ]
})