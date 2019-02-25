import Vue from 'vue'

import app from './App.vue'

//1.导入vue-router包
import VueRouter from 'vue-router'
//2.手动安装 VueRouter
Vue.use(VueRouter);
//3.创建路由对象

import router from './router.js'


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router //4.将路由对象挂载到 vm 上
})