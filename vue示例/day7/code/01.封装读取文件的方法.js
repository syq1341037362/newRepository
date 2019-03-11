//需求:你要封装一个方法 我给你一个要读取文件的路径 你这个方法能帮我读取文件 并把内容返回给我
const fs = require('fs')
const path = require("path")


//这是普通读文件的方式
// fs.readFile(path.join(__dirname, './files/1.txt'), 'utf-8', (err, dataStr) => {
//     if (err) throw err;
//     console.log(dataStr)

// })


//初衷：给定文件路径 返回读取到的内容
//我们可以规定一下callback有2个参数 第一个参数是失败的结果 第二个参数是成功的结果
//同时我们规定  如果成功后 返回的结果 应该位于callback 参数的第二个位置
// 此时第一个位置由于没有出错 所以放一个null 如果失败了 则第一个位置放err对象 第二位置放置一个undefined
function getFileByPath(fpath, callback) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        //如果报错 进入if分支后 if后面的代码就没有必要执行了
        if (err) return callback(err)
            // teturn dataStr
        callback(null, dataStr)

    })
}
getFileByPath(path.join(__dirname, './files/11.txt'), (err, dataStr) => {
    if (err) return console.log(err.message);
    console.log(dataStr)

})