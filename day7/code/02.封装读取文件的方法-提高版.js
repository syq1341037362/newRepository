//需求:你要封装一个方法 我给你一个要读取文件的路径 你这个方法能帮我读取文件 并把内容返回给我
const fs = require('fs')
const path = require("path")

function getFileByPath(fpath, succCb, errCb) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        //如果报错 进入if分支后 if后面的代码就没有必要执行了
        if (err) return errCb(err)
            // teturn dataStr
        succCb(dataStr)

    })
}
// getFileByPath(path.join(__dirname, './files/21.txt'), function(data) {
//     console.log(data + '----成功了')
// }, function(err) {
//     console.log('失败的结果我们用失败的回调执行了' + err)
// })

//需求先读取文件1 再读取文件2 最后再读取文件三
//回调地狱
//使用ES6中的 Promise 来解决回调地狱的问题
//问 Promise 出来的本质是要干什么的：就是单纯的为了解决回调地狱问题 并不能帮我们减少代码量
getFileByPath(path.join(__dirname, './files/1.txt'), function(data) {
    console.log(data)
    getFileByPath(path.join(__dirname, './files/2.txt'), function(data) {
        console.log(data)
        getFileByPath(path.join(__dirname, './files/3.txt'), function(data) {
            console.log(data)
        })
    })

})