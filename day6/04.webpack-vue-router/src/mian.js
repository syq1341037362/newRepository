import Vue from 'vue'

import app from './App.vue'

//1.导入vue-router包
import VueRouter from 'vue-router'
//2.手动安装 VueRouter
Vue.use(VueRouter);
//3.创建路由对象

import account from './main/account.vue'
import goodslist from './main/goodslist.vue'
var router = new VueRouter({
    routes: [
        //account goodslist
        {
            path: "/account",
            component: account
        },
        {
            path: "/goodslist",
            component: goodslist
        }
    ]
})


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router //4.将路由对象挂载到 vm 上
})

//注意app这个组件是通过 vm实例的render 函数 渲染出来的 render函数如果要渲染组件
//渲染出来的 组件 只能放到 el:'#app' 所指定的元素中
// Account 和 goodslist 组件 是通过 路由匹配规则监听到的 所以 这两个组件
//只能展示到 属于路由的 <router-view></router-view>中去