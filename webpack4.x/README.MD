## webpack4.x [B站视频链接](https://www.bilibili.com/medialist/play/ml85543977/av41546218?pn=1)

---
### 清理插件 clean-webpack-plugin
> * cnpm i clean-webpack-plugin -D
---
### html插件 html-webpack-plugin 
> * cnpm i clean-webpack-plugin -D
> * 使用里面配置的属性<%= htmlWebpackPlugin.options.title %>
---
### 拆分css为单独文件的插件1 extract-text-webapck-plugin@next(4.0版本需要加 *@next*) 
> * 4.0版本默认清理output指定的目录
> * cnpm i extract-text-webapck-plugin@next -D
### css文件加c3前缀和sourceMap
> * sourceMap
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
                        plugins: loader => {
                            require('autoprefixer')({ browsers: ['>0.15% in CN'] })
                        }
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