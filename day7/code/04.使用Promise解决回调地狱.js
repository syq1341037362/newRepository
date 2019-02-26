//使用Promise解决回调地狱
const fs = require('fs')

function getFileByPath(fpath) {
    return new Promise((resolve, reject) => {
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
    return promise
}
//先读取文件1 再读取文件2 最后读取3
//注意 通过.then 指定 回调函数的时候 成功的 回调函数必须传 但是 失败的回调可以省略不传
//在上一个.then中返回一个新的 Promise 实例 可以继续用下一个.then 来处理

//如果前面的 Promise 执行失败  我们不想让后续的 Promise 操作被终止 可以为每一个Promise指定失败的回调函数
/*getFileByPath('./files/11.txt')
    .then((data) => {
        console.log(data + '---------------')
        return getFileByPath('./files/2.txt')
    }, (err) => {
        console.log('这是失败的返回结果' + err.message)
    }).then((data) => {
        console.log(data + '---------------')
        return getFileByPath('./files/3.txt')
    }).then((data) => {
        console.log(data + '---------------')
    })

console.log('okokok');
*/


//如果 promise执行的文件依赖于上一个promise执行的结果 那么这个时候 只要报错就没有必要继续执行下去
//这个时候就没有必要为每一个promise 指定 错误的回调函数
getFileByPath('./files/1.txt')
    .then((data) => {
        console.log(data + '---------------')
        return getFileByPath('./files/22.txt')
    }).then((data) => {
        console.log(data + '---------------')
        return getFileByPath('./files/3.txt')
    }).then((data) => {
        console.log(data + '---------------')
    }).catch((err) => { //catch 的作用  如果前面有任何的 promise 执行失败  则立即终止所有 promise 的执行 并马上进入 catch 去处理 Promise中抛出的异常
        console.log("这是自己定义的处理方式通过异常捕获机制" + err.message);
    })