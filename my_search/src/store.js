import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        searchText: ''
    },
    mutations: {
        addToSearchText(state, text) {
            state.searchText = text;
        }
    },
    getters: {
        getSearchText(state) {
            return state.searchText;
        }
    }
})