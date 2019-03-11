## postMessage(页面跨域通信)通过iframe
> [B站视频链接](https://www.bilibili.com/video/av31173487)
###如何实现
* 1.首先你需要2个页面 a.html 和 b.html a.html 在3000端口下  b.html在4000端口下
* 2.在a.html中通过 iframe 引用 b.html 如下
```
 <iframe src="http://localhost:4000/b.html" frameborder="0" id="frame" onload="load()"></iframe>
```
* 3.上面可以看到  a.html引用了 b.html 然后给这个 iframe 定义了一个 Id 和一个加载完成执行的方法 load
* 4.在 a.html的load方法中定义通信内容 在b.html中定义接收和传值
> a.html中的内容
```
    function load() {
        let frame = document.getElementById("frame"); //获取iframe
        frame.contentWindow.postMessage('我爱你', 'http://localhost:4000') //向b.html发送内容并指定发送的源为4000
        window.onmessage = function(e) { //这里接收 4000下的 b.html发送回来的内容并打印出来
            console.log(e.data);
        }
    }
```
---
> b.html中的内容
```
    window.onmessage = function(e) {
        console.log(e.data) //获取a.html发送的内容
        e.source.postMessage('我不爱你', 'http://localhost:3000') //对a.html进行内容发送
    }
```
---
__这样a.html就可以和b.html进行页面间的跨域通信了__