import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


Vue.prototype.$axios = axios; // 将axios配置成vue的原型


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')