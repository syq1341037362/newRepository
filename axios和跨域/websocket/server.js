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