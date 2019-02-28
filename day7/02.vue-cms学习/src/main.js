//入口文件
import Vue from 'vue'


//导入 jq
import $ from 'jquery'
window.jQuery = $;
window.$ = $;

//导入路由的包

import VueRouter from 'vue-router'
Vue.use(VueRouter)

//启用VueX
import VueX from 'vuex'
Vue.use(VueX)
    //创建实例
    //每次进入网站 肯定会调用 main 在刚调用的时候 先从本地存储中 把购物车的数据读出来 放到store中
var car = JSON.parse(localStorage.getItem('car') || '[]');
var store = new VueX.Store({
    state: {
        //获取state数据 this.$store.state.**
        //将购物车中的商品数据用数组存起来 在car数组中 存储一些商品的对象 
        //咱们可以展示将这个商品对象设计成这个样子{id:商品id,count:商品数量,price:商品的单价,selected:false}
        car: car
    },
    mutations: {
        //获取mutations   使用 this.$store.commit('方法名称',唯一参数)
        addToCar(state, goodsinfo) {
            //点击加入购物车  把商品信息 保存到state car
            //分析:
            //1.如果购物车中之前就已经有这个对应的商品了 那么只需要更新数量
            //2.如果没有 则直接把商品数据 push到数组里面就行

            //假设在购物车中没有找到对应的商品
            var flag = false;

            state.car.some(item => {
                    if (item.id == goodsinfo.id) {
                        // console.log(item.count + '--------' + goodsinfo.count);
                        item.count += parseInt(goodsinfo.count)
                        flag = true
                        return true
                    }
                })
                //如果最终 循环完毕 得到的 flag 还是 false 就push 到car 中
            if (!flag) {
                state.car.push(goodsinfo)
            }

            //当更新car 之后 把car数组 放到本地的localstorage中
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters: {
        //获取getters this.$store.getters.**
        //相当于计算属性 也相当于过滤器
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count;
            })
            return c;
        }
    },
})



//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入自己的router.js 路由模块

import router from './router.js'

//导入app 根组件
import app from './App.vue'

//头部组件 轮播图组件
// import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button)
// Vue.component(Loadmore.name, Loadmore)
// import { Lazyload } from 'mint-ui'
// Vue.use(Lazyload)


//因为 懒加载 按需导入有问题 改为全局导入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


//导入缩略图
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)



//配置跨域
import axios from 'axios';

axios.defaults.timeout = 5000; // 在超时前，所有请求都会等待 5 秒
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; // 配置请求头
axios.defaults.baseURL = 'http://127.0.0.1:1234'; // 配置接口地址
axios.defaults.withCredentials = false;

Vue.prototype.$axios = axios; // 将axios配置成vue的原型


//导入时间插件
import moment from 'moment'

//定义全局过滤器
Vue.filter('dataFormat', (dataStr, patten = "YYYY-MM-DD HH:mm:ss") => {
    return moment(dataStr).format(patten)
})


//导入底部tabbar样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router, //挂载路由到VM实例上
    store //挂载store状态管理对象
})