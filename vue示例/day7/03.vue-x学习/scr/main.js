import Vue from 'vue'
import VueX from 'vuex'
//配置 vuex 的步骤
//1.运行 cnpm i vuex -S
//2.导入包
//3.注册vuex到vue中
Vue.use(VueX)
    //4. new 一个VueX.Store()实例 得到一个数据仓库对象
var store = new VueX.Store({
        state: {
            //可以想象成 组件中的data 专门用来存储数据的
            //如果在组件中想要获取store 中的数据 只能通过$store.state来获取
            count: 0
        },
        mutations: {
            //注意如果要操作state中的值 只能通过mutations 提供的方法才能操作 不推荐直接操作 state 中的数值
            increment(state) {
                state.count++
            },
            subtract(state, obj) {
                //注意mutations的 函数参数列表中 最多支持2个参数 
                //参数1是 state 状态
                //参数2是commit提交过来的
                state.count -= (obj.c + obj.d)
            }
            //注意 如果组件想要调用 mutations 的方法 只能通过 this.$store.commit('方法名')
            //这种调用mutations方法的格式和 this.$emit('父组件的方法名')
        },
        getters: {
            //注意 这里的 getters 只负责对外提供数据 不负责修改数据 如果想要修改 state中的数据 请去找mutations
            optCount: (state) => {
                    return '当前最新的count值是：' + state.count
                }
                //经过回顾对比 发现 getters 中的方法 和组件中的过滤器比较类似 因为过滤器和 getters 都没有修改原数据 都是把 原数据做了一层包装 提供给调用者
                //其次 getters 和 computed 比较像 只要 state 中数据发生变化 那么如果getters 正好引用了这个数据 那么就会立即触发 getters 的重新求值
        }

    })
    //总结
    //1.state中的数据不能直接修改 如果想要修改 必须通过 mutations
    //2.如果组件想要直接从state上获取数据  需要 this.$store.state.属性
    //3.如果组件想要修改state上的数据 需要通过mutations 提供的方法 需要通过 this.$store.commit('方法名',唯一的一个参数)
    //4.如果 store 中 state 上的数据 在对外提供的时候 需要做一层包装 那么 推荐使用 getters 如果需要使用 getters 则用 this.$store.getters.****

import app from './App.vue'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    store //将vuex 创建的store 挂载到vm实例上 只要挂载在vm上 所有组件就能使用store 存储数据 可能导致数据紊乱 不能快速定位错误的原因 因为每个组件都有可能操作
})