import types from './types.js'
const actions = {
    //异步操作
    [types.COUNTADDASYNC]({ commit, state }) {
        var promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000)
        })
        promise.then(() => {
            commit(types.COUNTADD)
        }).catch(() => {
            console.log('异步操作失败')
        })
    }
}

export default actions