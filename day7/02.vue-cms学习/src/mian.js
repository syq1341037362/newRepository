//入口文件
import Vue from 'vue'

//导入路由的包

import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入自己的router.js 路由模块

import router from './router.js'

//导入app 根组件
import app from './App.vue'

//头部组件 轮播图组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);





//配置跨域
import axios from 'axios';

axios.defaults.timeout = 5000; // 在超时前，所有请求都会等待 5 秒
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; // 配置请求头
axios.defaults.baseURL = 'http://127.0.0.1:1234'; // 配置接口地址
axios.defaults.withCredentials = false;

Vue.prototype.$axios = axios; // 将axios配置成vue的原型


//导入底部tabbar样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router //挂载路由到VM实例上
})