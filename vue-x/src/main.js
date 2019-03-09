import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'

new Vue({
    render: h => h(App),
    store
}).$mount('#app')