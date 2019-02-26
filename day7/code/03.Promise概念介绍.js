//1. Promise是构造函数 既然是一个构造函数 就可以 new 一个
//2. 在 Promise 有2个函数 分别叫做 resolve(成功后的回调函数) reject(失败之后的回调函数)
//3. 在Promise 构造函数的 Prototype 属性上 有一个 .then() 方法 也就是说 只要是 Promise 构造函数创造的实例 都可以访问到.then() 方法
//4. Promise 表示一个 异步操作; 每当我们 New 一个 Promise 的实例 这个实例就表示 一个具体的异步操作
//5. 既然 Promise 创建的实例是一个异步操作 那么 这个 异步操作的结果 只能有两种状态 
//5.1 状态1：异步执行成功了 需要在内部调用 resolve 把结果返回给调用者
//5.2 状态2：异步执行失败了 需要在内部调用 reject 把结果返回给调用者
//5.3 由于 Promise 的实例 是一个异步操作 所以 内部拿到 操作的结果后 无法使用 return 把操作的结果返回给调用者
//    这时候 只能使用 回调函数的形式 来吧成功 或 失败的结果 返回给调用者
//6. 我们可以在 new 出来的 Promise 实例上 调用 .then 方法 
//   [预先]为这个 promise 异步操作 指定 成功(resolve) 和 失败(reject) 回调函数


//注意 这里new 出来的Promise 只是代表 [形式上]的一个异步操作
//什么是形式上的异步操作：就是说我们只知道他是一个异步操作 但是做什么集体的异步事情 目前还不清楚
// var promise = new Promise()

//这是一个具体的异步操作 其中 使用 function指定一个具体的异步操作
/*var promise = new Promise(() => {
    //这个 function 内部就是具体的异步操作
})*/

const fs = require('fs')
    //每当new 一个Promise实例的时候  就会立即执行这个 异步操作中的代码
    //也就是说 new 的时候除了能够得到一个 Promise实例之外 还会立即调用 我们为 Promise 构造函数传递的那个 function 执行这个 function 中的 异步操作代码
    // var promise = new Promise(() => {
    //     fs.readFile('./files/2.txt', 'utf-8', (err, dataStr) => {
    //         if (err) throw err
    //         console.log(dataStr)
    //     })
    // })


//初衷 给路径 返回读取的内容    
function getFileByPath(fpath) {
    return new Promise((resolve, reject) => {
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
    return promise
}
getFileByPath('./files/2.txt').then(function(data) {
    console.log(data + '---------------')
}, function(err) {
    console.log(err.message)
})