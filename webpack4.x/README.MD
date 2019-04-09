## webpack4.x [B站视频链接](https://www.bilibili.com/medialist/play/ml85543977/av41546218?pn=1)

---
### 清理插件 clean-webpack-plugin
> * 4.0版本默认清理output指定的目录
> * cnpm i clean-webpack-plugin -D
---
### html插件 html-webpack-plugin 
> * cnpm i clean-webpack-plugin -D
> * 使用里面配置的属性<%= htmlWebpackPlugin.options.title %>
---
### css样式抽离组件1 extract-text-webapck-plugin@next(4.0版本需要加 *@next*) 
> * cnpm i extract-text-webapck-plugin@next -D
---
```
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const dist_dir = 'dist_dev'
module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, dist_dir)
    },
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
        }, {
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
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css' // 配置提取出来的css名称
        })
    ]
}
```
### css样式抽离组件2 mini-css-extract-plugin
> * cnpm i mini-css-extract-plugin -D
---
```
 const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'
const dist_dir = 'dist'
module.exports = {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename: 'main.js',
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            title: '页面标题',
            filename: "index.html",
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css', // 配置提取出来的css名称
            chunkFilename: '[id].[hash].css' //
        })
    ]
}
```
### css文件加c3前缀和sourceMap
> * sourceMap 定位css样式的位置
> * css加c3前缀需要用到 *postcss-loader* 和 它的内部插件 *autoprefixer* 如果浏览器版本过高可能没有前缀
---
```
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
                    plugins: loader => [
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
    }, {
        test: /\.(png|svg|jpg|jpeg)$/,
        use: ['file-loader']
    }]
```
### 压缩CSS插件 optimize-css-assets-webpack-plugin 和 JS压缩插件 uglifyjs-webpack-plugin
> * cnpm i optimize-css-assets-webpack-plugin -D 
> * cnpm i uglifyjs-webpack-plugin -D  
> * 下面注释区域是因为放在optimization(优化) 中不起作用所以还是放在plugin里面
---
```
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
```
