import types from './../types.js'

const state = {
    count: 6
}

const getters = {
    getCount(state) {
        return state.count;
    }
}

const actions = {
    //增加
    [types.COUNTADD]({ commit, state }) {
        commit(types.COUNTADD);
    },
    //减少
    [types.COUNTDECREASE]({ commit, state }) {
        if (state.count > 10) {
            commit(types.COUNTDECREASE);
        }
    }
}

const mutations = {
    [types.COUNTADD](state) {
        state.count++
    },
    [types.COUNTDECREASE](state) {
        state.count--
    }

}

export default {
    state,
    getters,
    actions,
    mutations

}