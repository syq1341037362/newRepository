//项目的JS入口文件
import './css/index.css'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
console.log("ok");

class Person {
    //使用static 关键字 可以定义静态属性
    //静态属性 可以通过类名直接访问的属性
    //实例属性 只能通过类的实例来访问的属性
    static info = { name: 'zs', age: 20 }
}
//访问Person类身上的info静态属性
console.log(Person.info)
    //在 webpack 中 默认只能处理一部分ES6 的新语法 一些更高级的ES6语法和ES77语法
    //webpack 是处理不了的 这时候 就需要借助第三方的 loader 
    //来帮助 webpack 处理这些高级的语法 当第三方loader 把高级语法 转为 低级语法之后
    //会把结果交给webpack 去打包到bundle.js中
    //通过 Babel 可以帮助我们将高级的语法转换为低级的语法
    //1. 在webpack 中 可以运行如下2套命令 安装2套包 去安装Babel 相关的loader功能
    //1.1 第一套 cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
    //1.2 第二套 cnpm i babel-preset-env babel-preset-stage-0 -D

//2.打开webpack.config.js 在module 节点下的 rules 数组中  添加一个新的匹配规则

//2.1 {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}

//2.2 注意在配置 babel 的loader规则的时候 必须把node_modules 目录，通过exclude
//选项排除掉 愿意有2个:

//2.2.1 如果不排除node_modules 则babel 会把node_modules 中所有的 第三方JS文件
//都打包编译 这样会非常消耗CPU 同时 打包速度非常慢

//2.2.2 哪怕 最终 Babel 把所有的 node_modules 中的JS都转换完毕 但是项目也无法正常运行!

//3.在项目的根目录中 新建一个叫做 .babelrc 的babel配置文件 这个配置文件属于JSON格式
//所以 在写 .babelrc 配置的时候 必须符合JSON语法规范 ：不能写注释，字符串必须用双引号

//3.1 在.babelrc 写如下配置 大家可以吧preset 翻译成 预设
// {
//     "presets":["env","stage-0"],
//     "plugins":["transform-runtime"]
// }

//4.了解 目前我们安装的 babel-preset-env 是比较新的ES语法插件 
//之前我们安装的是 babel-preset-2015 现在出了新的 语法插件 叫做 babel-preset-env
//它包含了所有的 和 es***相关的语法





// var p1 = new Person();

// function Animal(name) {
//     this.name = name
// }
// Animal.info = 123;
// var a1 = new Animal('小花')

// //这是静态属性
// // console.log(Animal.info)
// //这是实例属性
// console.log(a1.name);