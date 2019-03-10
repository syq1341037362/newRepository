const http = require('http');
const server = http.createServer();
const urlModule = require('url')

server.on('request', function(req, res) {
    const { pathname: url, query } = urlModule.parse(req.url, true); //解析
    var rdata = urlModule.parse(req.url, true).query; //获取参数
    //设置那个源可以访问
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    //设置允许那个方法访问
    res.setHeader("Access-Control-Allow-Methods", "PUT");
    //设置允许携带那个请求头访问
    res.setHeader("Access-Control-Allow-Headers", "name");
    //设置允许携带cookie凭证 如果第一条的源写 * 则不能和凭证公用
    res.setHeader("Access-Control-Allow-Credentials", true);
    //设置允许前端获取那个头
    res.setHeader("Access-Control-Expose-Headers", 'name');
    //设置预检的存活时间
    res.setHeader("Access-Control-Allow-Max-Age", 6000);
    //设置允许返回的头
    res.setHeader('name', '1995')

    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' }); //设置返回头为 200 
    //如果请求的是options 直接断开 options请求不做任何处理
    if (req.method === 'OPTIONS') {
        res.end()
    }

    if (url == '/getData') {
        console.log(req.headers.origin)
        console.log(req.headers.name)

        res.end('我不爱你')
    }
})

server.listen(4000);