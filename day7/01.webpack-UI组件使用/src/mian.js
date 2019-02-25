import Vue from 'vue'

import app from './App.vue'

//1.导入vue-router包
import VueRouter from 'vue-router'
//2.手动安装 VueRouter
Vue.use(VueRouter);

//导入mint-ui
// import MintUI from 'mint-ui' //这里导入了所有的组件
// //导入mint-ui 的css
// import 'mint-ui/lib/style.css'

// Vue.use(MintUI); //把所有组件注册为全局组件


//按需导入 mint-ui组件
import { Button, Toast } from 'mint-ui'
//使用 vue.component 注册组件
Vue.component(Button.name, Button);


import '../src/lib/mui/css/mui.css'

//导入bootstrap自己的图标
import 'bootstrap/dist/css/bootstrap.css'

import './css/app.css'

//3.创建路由对象

import router from './router.js'


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router //4.将路由对象挂载到 vm 上
})