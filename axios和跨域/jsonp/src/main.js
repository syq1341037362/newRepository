import Vue from 'vue'
import App from './App.vue'
import jsonp from 'vue-jsonp'
Vue.use(jsonp)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')