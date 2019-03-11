## websocket通信 可以跨域 和 http长连接的本质区别是 http是单向 socket是双向 传输都是靠TCP

### [B站视频链接](https://www.bilibili.com/video/av31173487)


### 需求
- 1.向websocket发送数据
- 2.获取返回的数据
***
### 实现
- 1.页面创建一个websocket 发送数据
- 2.服务端 创建一个 websocket 服务器 接收数据并返回
***
### 实现
- 1.a.html先引用b.html(跨域不能直接拿值) a 和 b 虽然是一二级域名的关系 但是还是跨域
- 2.在a.html中 加入 document.domin = 'ky.cn'
- 3.在b.html中 加入 document.domin = 'ky.cn'
- 3.在a.html中获取b的属性 用 frame.contentWindow.b中你想要的属性的名称
***

### 注意如果没有一二级的域名 可以通过hosts文件进行修改模拟一二级域名
> hosts文件地址 C:\Windows\System32\drivers\etc\hosts
> 假设我是 a.ky.cn 和 b.ky.cn 我就如下配置模拟一个一二级域名 注意不要带上# #是注释不使用的意思
```
    127.0.0.1       a.ky.cn
	127.0.0.1       b.ky.cn
```

### 代码
> socket.html
```
<body>
    <script>
        //高级api 不兼容 但是有一个库叫socket.io (一般使用它)兼容 这里就使用websocket
        //仔细看server.js 服务端
        //创建一个scoket
        let scoket = new WebSocket('ws://localhost:3000');
        //当连接成功之后 会触发onopen
        scoket.onopen = function() {
                scoket.send('我爱你')
            }
            //监听服务端发送的消息
        scoket.onmessage = function(e) {
            console.log(e.data)
        }
    </script>
</body>
```
***
> server.js 注意不要使用 app.listen(3000) 这样报端口占用
```
const express = require('express');

const app = express();
//需要安装包 cnpm i ws
const Websocket = require('ws');
//通过Websocket.Server创建一个它的服务
const wss = new Websocket.Server({ port: 3000 });

    wss.on('connection', function(ws) {
        ws.on('message', function(data) {
            console.log(data)
            ws.send('我不爱你')
        })
})
```