import VueRouter from 'vue-router'
import account from './main/account.vue'
import goodslist from './main/goodslist.vue'
//导入account的子组件
import login from './main/subcom/login.vue'
import register from './main/subcom/register.vue'
var router = new VueRouter({
    routes: [
        //account goodslist
        {
            path: "/account",
            component: account,
            children: [{
                path: 'login',
                component: login
            }, {
                path: 'register',
                component: register
            }]
        },
        {
            path: "/goodslist",
            component: goodslist
        }
    ]
})
export default router