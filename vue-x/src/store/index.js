import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'
import user from './modules/user.js'

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        user
    }
})