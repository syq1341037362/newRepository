//这个配置文件其实就是一个js文件 通过 Node 中的模块操作 向外暴露一个 配置对象
const path = require('path')
    //启用热更细的 第二步
const webpack = require('webpack')

//导入 在内存中生成 HTML 页面的 插件
//这个插件的两个作用 
//1.自动在内存中根据指定页面生成一个对应的内存页面
//2.自动把 打包好的bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {

    entry: path.join(__dirname, './src/mian.js'), //入口 表示要使用 webpack 打包那个文件
    output: {
        path: path.join(__dirname, './dist'), //指定打包好的文件 输出到那个目录中去
        filename: 'bundle.js' //指定输出 输出文件的名称
    },
    devServer: {
        //这是配置 dev-server 命令参数的第二种形式 相对来说 这种方式麻烦一些
        open: true, //自动打开浏览器
        port: 3000, //设置启动的运行端口
        contentBase: 'src', //指定托管的根目录
        hot: true //启用热更新 的 第一步
    },
    plugins: [ //配置插件阶段
        new webpack.HotModuleReplacementPlugin(), //new一个热更新对的 模块对象 这是启用热更细的第3步
        new htmlWebpackPlugin({ //创建一个在内存中 生成 HTML页面的插件
            template: path.join(__dirname, './src/index.html'), //指定模板页面 将来会根据指定的页面路径 去生成内存中的页面
            filename: 'index.html' //指定生成的页面的名称

        })
    ],
    module: {
        //这个节点，用于配置所有的第三方模块 加载器
        rules: [ //所有第三方模块的 匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //配置处理.css文件的第三方 loader 规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理.less文件的第三方 loader 规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] } //配置处理.scss文件的第三方 loader 规则
        ]
    }
}

//但我们在控制台 直接输入 webpack 命令执行的时候 webpack 做了以下几步
//1.首先webpack 发现 我们并没有通过命令的形式 给它指定入口和出口
//2.webpack 就会去项目的 根目录中 查找一个叫做'webpack.config.js' 的配置文件
//3.当找到配置文件后 webpack 就回去解析执行这个 配置文件 当解析执行完配置文件 就得到了配置文件中 导出的配置对象
//4.当 webpack 拿到 配置对象后 就会找到指定的 入口 和 出口 然后进行打包构建和解析