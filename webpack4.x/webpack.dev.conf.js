const path = require('path')
const WebapckMerge = require('webpack-merge')
const Webpack = require('webpack')
const BaseConfig = require('./webpack.base.conf')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')


const dist_dir = 'dist_dev'
module.exports = WebapckMerge(BaseConfig, {
    mode: 'development',
    output: {
        filename: 'main.[hash:6].js',
        path: path.resolve(__dirname, dist_dir)
    },
    devtool: 'inline-source-map', //开发阶段开启sourceMap
    module: {
        rules: [{
            test: /\.(sc|c|sa)ss$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss', //微标志
                        sourceMap: true,
                        plugins: (loader) => [
                            require('autoprefixer')({
                                browsers: [
                                    "defaults",
                                    "not ie < 11",
                                    "last 2 versions",
                                    "> 1%",
                                    "iOS 7",
                                    "last 3 iOS versions"
                                ]
                            })
                        ]
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }]
            })
        }]
    },
    devServer: {
        // // clientLogLevel: 'warning', //日志输出级别 可能有的值 none warning info error
        // hot: true, //启用 webpack模块的 热更新 需要配合：webpack.HotModuleReplacementPlugin插件
        // contentBase: 'src', //告诉服务器从哪里提供内容
        // // compress: true, //一切服务都启用gzip压缩
        // host: 'localhost', //指定一个host 默认localhost 如果你希望服务器外部可以访问 0.0.0.0
        // port: 8080, //端口号
        // // inline: true,
        // open: true, //是否自动打开浏览器
        // overlay: { //出现错误或者警告的时候，是否覆盖页面线上错误消息
        //     warnings: true,
        //     errors: true
        // },
        // // publicPath: '/', //此路径下的打包文件可以在浏览器中访问
        // proxy: { //设置代理
        //     '/api': { //访问api开头的请求会跳转到 下面的target配置
        //         target: 'http://192.168.0.1:8080', //代理到那个服务器
        //         pathRewrite: { //地址重写
        //             '^api': '/mockjsdata/a/api'
        //                 //假设请求的地址是 /api/getuser => http://192.168.0.1:8080//mockjsdata/a/api/getuser
        //         }
        //     }
        // },
        // // quiet: true, //除了启动信息之外的任何内容都不会显示
        // // watchOptions: { //监视文件相关的控制选项
        // //     poll: true, //主动拉取变化
        // //     ignored: /node_modules/, //忽略监控的文件 正则
        // //     aggregateTimeout: 300 //默认值 当第一个文件更改 会在重新构建前增加延迟
        // // }
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name].[hash:6].css', // 配置提取出来的css名称
            // publicPath: './style'
        }),

        new Webpack.HotModuleReplacementPlugin(), //替换插件 热更新必备插件

    ]
})