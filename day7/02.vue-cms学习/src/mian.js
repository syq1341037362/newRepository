//入口文件
import Vue from 'vue'

//导入app 根组件
import app from './App.vue'

import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

//导入底部tabbar样式
import './lib/mui/css/mui.min.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})