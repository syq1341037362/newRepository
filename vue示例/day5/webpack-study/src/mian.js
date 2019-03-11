//这个mian.js 是我们项目的js入口文件
//导入Jquery
//import ***  from *** 是ES6中导入模块的方法
//由于 ES6de 的代码 浏览器解析不了  所有这一行执行会报错
import $ from 'jquery';

//使用 import 语法 导入css 样式表
import './css/index.css';
import './css/index.less';
import './css/index.scss';
//注意 webpack 默认只能打包处理 JS类型的文件  无法处理 其他的非JS 类型的文件
//如果 要处理 非JS类型的文件  我们需要 手动暗转一些 合适的第三方 loader 加载器
//1.如果想要打包处理 css 文件 需要安装 cnpm i style-loader css-loader -D 这两个
//2. 打开webpack.config.js 这个配置文件 在里面新增一个配置节点 叫做 module,他是一个对象
//在这个module 对象身上 有个 rules 属性 这个rules属性是个数组，这个数组中存放了所有第三方文件的 匹配和处理规则

//处理less文件 需要安装 cnpm i less-loader-D 和  cnpm i less-D 配置规则基本相同 都需要加入style-loader 和 css-loader

//处理scss文件  需要安装 cnpm i sass-loader -D  和 node-sass -D

$(function() {
    $("li:odd").css('backgroundColor', 'red'),
        $("li:even").css('backgroundColor', function() {
            return '#' + 'D97634'
        })
})

//经过刚才的演示 webpack 可以做什么事情
//1.webpack 能够处理js文件之间的相互依赖关系
//2.webpack 能够处理js的兼容问题 把高级的浏览器不识别的语法 转为低级的 浏览器能正常识别的语法
//3.刚才运行的命令格式是 webpack [要打包的文件的路径] --output [打包好的输出文件的路径]
//4.为什么要使用 --output webpack3.x 不需要 --output 但是4.x要想这么做 必须写这个
//实例 webpack ./src/mianjs --output ./dist/bundle.js

//使用webpack-dev-server 这个工具 来实现自动打包编译的功能
//1.运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
//2.安装完毕之后 这个工具的用法和webpack 命令的用法 完全一样
//3.由于我们是在项目中 本地安装的webpack-dev-server 所以无法把他当做脚本名利 在powershell 终端中直接运行；(只有那些安装到 全局 -g 的工具 才能在终端中运行)
//4. 注意 webpack-dev-server 这个工具 如果想正常运行 要求 在本地项目中 必须安装webpack webpack-cli
//5.webpack-dev-server帮我们打包生成的bundle.js 文件 并没有存放到实际的 物理磁盘上 而是直接托管到了 电脑的内存中 所以我们在项目根目录中 根本找不到 这个打包好的bundle.js
//6.我们可以认为 webpack-dev-server 把打包好的文件 以一种虚拟的形式  托管到了 项目根目录 虽然我们看不到他 但是可以认识 和dist src node-modules 平级 有一个看不见的文件 叫做bundle.jsimport


//注意 webpack 处理第三方文件类型的过程
//1.如果发现 要处理的文件不是JS文件 然后就去配置文件中 查找有没有对应的 第三方loader 规则
//2. 如果能找到对应的规则 就是调用对应的loader 处理  这种文件类型
//3. 在调用loader 的时候 是从后往前调用的
//4. 当最后一个loader 调用完毕 就会吧处理的结果直接交给webpack 进行打包合并，最终输出到 bundle.js 中去