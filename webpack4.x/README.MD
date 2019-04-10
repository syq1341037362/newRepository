## webpack4.x [B站视频链接](https://www.bilibili.com/medialist/play/ml85543977/av41546218?pn=1)

---
### 1.清理插件 clean-webpack-plugin
> * 4.0版本默认清理output指定的目录
> * cnpm i clean-webpack-plugin -D
---
### 2.html插件 html-webpack-plugin 
> * cnpm i clean-webpack-plugin -D
> * 使用里面配置的属性<%= htmlWebpackPlugin.options.title %>
---
```
new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            title: '页面标题',
            filename: 'index.html',
            favicon: './static/logo.png',//网页的图标
            hash: true,
            inject: 'body', // 在 body 底部引入
            minify: {
                removeAttributeQuotes: true, // 移除属性的引号
                collapseWhitespace: true, // 删除空格
                removeComments: true //移除注释
            }
        }),
```
---
### 3.css样式抽离组件
#### 3.1 extract-text-webapck-plugin@next(4.0版本需要加 *@next*) 
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
#### 3.2 css样式抽离组件2 mini-css-extract-plugin
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
### 4.css文件加c3前缀和sourceMap
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
### 5.压缩CSS插件 optimize-css-assets-webpack-plugin 和 JS压缩插件 uglifyjs-webpack-plugin
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
            parallel: true,//多通道并行处理
            sourceMap: true
        })
    ],
    // optimization: {
    //     minimizer: [
    //         new OptimizeCssAssetsWebpackPlugin({}),
    //         new UglifyjsWebpackPlugin({
    //             cache: true,
    //             parallel: true,//多通道并行处理
    //             sourceMap: true
    //         }),
    //     ],
    // },
```
### 6.图片处理和优化插件
#### 6.1首先图片处理需要依靠 file-loader 或者 url-loader(相对于file-loader *url-loader*不仅能压缩图片而且还可以通过options中的limit 将符合条件的图片转成base64)
#### 6.2 图片优化插件 image-webpack-loader
> * cnpm i image-webpack-loader -D
---
> * 下面使用的是file-loader
```
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
```
> * 下面使用的是url-loader
---
```
 rules: [{
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash:6].[ext]', //保持打包后的图片名字和原来一样
                        outputPath: 'images/',
                        limit: 10000 //将小于10KB的图片转成base64 一般限定到10KB
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
```
---
### 7.开发模式启用js的 sourceMap webpack默认支持
> * 只需要在开发的配置文件 dev文件中添加如下配置
```
devtool: 'inline-source-map'//开发阶段开启sourceMap
```

### 8.webpack启动监控和自动更新(热更新)
#### 8.1 使用 --watch来启动监控 (遇到一个问题虽然别的都打包了但是没有打包css中的图像文件 但是去掉url-loader的limit之后就好了 原因在于对应的路径不同 但是没啥解决的办法)
> * 在package.json 中script下添加一个新的启动选项watch  如下
```
"scripts": {
        "dev": "webpack --config webpack.dev.conf.js",
        "build": "webpack --config webpack.prod.conf.js",
        "watch": "webpack --watch --config webpack.dev.conf.js"
    }
```
#### 8.2 使用插件webpack-dev-server 使webpack自动更新(热更新)
> * cnpm i webpack-dev-server -D
> * 1.在package.json 中script下添加一个新的启动选项  如下
---
```
        "devhot": "webpack-dev-server --open --inline --port:3000 ContentBase src --config webpack.dev.conf.js"

```
> * 2.在dev配置文件中引入 webpack 并在plguins中使用webpack.HotModuleReplacementPlugin()
---
```
const Webpack = require('webpack')
plugins: [ 
    new Webpack.HotModuleReplacementPlugin(), //替换插件 热更新必备插件
 ],
```
---
### 9.图片路径等问题
> * img标签引用本地文件 打包后发现路径不正确 如果修改url-loader 的 publicPath
> * css显示正确但是 img标签显示错误 后来引用了html-loader 路径问题解决但是另一个问题出现了
> * html-webpack-plugin配置页面标题用 <%= htmlWebpackPlugin.options.title %> 打包之后变成了字符串 所以还是有问题 
> * 最后不使用 html-loader 然后 img标签统一用下面的方法 然后url-loader不改变publicPath的路径 这样暂时解决了问题
```
<img src="<%= require( './assets/img/gtx.jpg') %>" alt=""> 
```
