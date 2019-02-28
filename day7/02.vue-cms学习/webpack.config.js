//导入路径模块
const path = require('path');
//在内存中 根据指定的模板页面在内存中生成一份 同时将打包好bundle.js 注入
const htmlWebpackPlugin = require('html-webpack-plugin');

//vue-loader如果版本高于15以上的使用都是需要伴生 VueLoaderPlugin的
const vueLoaderPlugin = require("vue-loader/lib/plugin");


//当以命令行形式运行webpack 或 webpack-dev-server 的时候  工具会发现我们并没有提供
//打包的文件的入口 和出口  就会检查项目目录的配置文件  并读取这个文件 就拿到了导出的这个配置对象
//然后根据这个对象进行打包构建
module.exports = {
    entry: path.join(__dirname, './src/main.js'), //项目入口文件
    output: {
        path: path.join(__dirname, './dist'), //输出路径
        filename: 'bundle.js' //指定输出文件的命令
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定模板文件的路径
            filename: 'index.html' //设置生成的内存页面的名称
        }),
        //new一个VueLoaderPlugin
        new vueLoaderPlugin()
    ],
    module: { //配置所有第三方loader 模块
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //处理css文件的loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //处理less文件的loader
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, //处理scss文件的loader
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=48194&name=[hash:8]-[name].[ext]' }, //处理图片路径的loader
            //limit 给定的值是图片的大小  单位是 byte 如果我们引用的图片 大于或等于给定limit值 则不会被转为Base64格式的字符串
            //如果大于给定的limit 则会被转为Base64的字符串
            { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' }, //这是处理字体文件的loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, //这是配置babel 来转换高级的Es语法
            { test: /\.vue$/, use: 'vue-loader' } //处理.vue 文件的loader
        ]

    },
    resolve: {
        alias: {
            //设置vue 被导入的时候包的路径
            // "vue$": "vue/dist/vue.js"
        }
    }
}