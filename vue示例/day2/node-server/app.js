//导入 http 内置模块
const http = require('http')
//这个模块可以帮我们解析 URL地址 从而拿到 pathname query
const urlModule = require('url')

//创建一个 http 服务器
const server = http.createServer()

//监听 http 服务器的 request 请求
server.on('request',function (req,res) {
    // const url  = req.rul
    const { pathname :url,query} = urlModule.parse(req.url,true)
    if(url === '/getscript'){
        //拼接一个合法的js脚本 这里拼接的是个方法的调用
        // var script = 'show()';
        var data = {
            name:'张三',
            age:'18',
            gender:'女孩子'
        }
        console.log(query.callback)
        var script = `${query.callback}(${JSON.stringify(data)})`;
        res.end(script)
        //res.end 发送给客户端 客户端去吧这个字符串 当做js代码去解析执行
    }else{
        res.end('404')
    }
    
})

//指定端口号并启动服务器监听
server.listen(3000,function(){
    console.log('server listen at http://127.0.0.3000')
})