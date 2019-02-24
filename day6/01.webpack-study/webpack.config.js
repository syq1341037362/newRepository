//导入路径模块
const path = require('path');
//在内存中 根据指定的模板页面在内存中生成一份 同时将打包好bundle.js 注入
const htmlWebpackPlugin = require('html-webpack-plugin');
//当以命令行形式运行webpack 或 webpack-dev-server 的时候  工具会发现我们并没有提供
//打包的文件的入口 和出口  就会检查项目目录的配置文件  并读取这个文件 就拿到了导出的这个配置对象
//然后根据这个对象进行打包构建
module.exports = {
    entry: path.join(__dirname, './src/mian.js'), //项目入口文件
    output: {
        path: path.join(__dirname, './dist'), //输出路径
        filename: 'bundle.js' //指定输出文件的命令
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定模板文件的路径
            filename: 'index.html' //设置生成的内存页面的名称
        })
    ]
}