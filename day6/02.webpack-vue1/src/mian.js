//如何在webpack 构建的项目中 使用Vue开发

//复习 在普通网页中如何使用Vue
//1. 使用script标签引入 Vue的包
//2. 创建一个Id 为 app 的 div 容器
//3. 通过 new Vue 得到一个 vm 的实例

// 在webpack中 尝试使用 Vue:
// 注意在webpack 中 使用 import Vue from 'vue' 导入的Vue 构造函数，功能不完整
// 只提供了 runtime-only 的方式 并没有提供 像网页中那样的使用方式

import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'
// 回顾 包的查找规则
// 1.在项目根目录中有没有 node_modules 的文件夹
// 2.在node_modules 中 根据包名 找对应的 vue 文件夹
// 3.在vue 文件夹 中 一个叫做package.json 的包配置文件
// 4.在packages.json 文件中 查找一个 main 属性 [main属性指定了这个包在被夹在时候的入口文件]

// var login = {
//     template: "<h1>login组件是使用网页中的形式创建出来的组件</h1>"
// }

//1.导入login组件
import login from './login.vue'
//默认webpack 无法打包 .vue文件 需要安装相关的loader
//cnpm i vue-loader vue-template-compiler -D
//在配置文件中 新增loader配置项 {test:/\.vue$/,use:'vue-loader'}

var vm = new Vue({
    el: '#app',
    data: {
        msg: "123"
    },
    // components: {
    //     login
    // }
    // render: function(createElement) {
    //     //在webpack中 如果想通过 vue 把一个组件放到页面中去展示 
    //     //vm 实例中的render 函数可以实现
    //     return createElement(login);
    // }
    render: c => c(login)
})


//总结梳理 webpack中如何使用vue
//1.安装vue 的包 cnpm i vue -S
//2.由于在webpack 中 推荐使用 .vue 这个组件模板文件定义组件 
//所以 需要安装 能解析这种文件的 loader 
// cnpm i vue-loader vue-template-complier -D  
//安装完成后需要看一下 vue-loader版本 如果高于15 vue-loader的使用都是需要伴生 VueLoaderPlugin的
//在webpack.config.js 除了在module下面的rules 中定义loader {test:/\.vue$/,use:'vue-loader'}之外
//还需要 conset VueLoaderPlugin = require("vue-loader/lib/plugin")
//然后在 plugins 插件中 new一个 VueLoaderPlugin

//3.在main.js中 导入 vue 模块 import Vue from 'vue'
//4.定义一个 .vue结尾的组件 组件由三部分组成  ：template script style
//5.使用import导入这个组件
//6.创建vm实例 var vm = new Vue({el:'#app',render:c=>c(login)})
//7.在页面中创建一个 id 为app 的div 元素 作为我们vm实例要控制的区域