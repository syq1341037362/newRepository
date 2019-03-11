## domain(限制条件为一二级域名之间)跨域
### [B站视频链接](https://www.bilibili.com/video/av31173487)

### 需求

- 1.a.html 和 b.html 是一二级域名
- 2.获取 b.html的属性
***

### 实现
- 1.a.html先引用c.html(跨域不能直接拿值) a 和 b 虽然是一二级域名的关系 但是还是跨域
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
> a.html
```
<body>
    <!-- 一级域名和二级域名 -->
    <!-- 一级例如 www.baidu.com -->
    <!-- 二级域名 video.baidu.com -->
    <!-- 看似能访问 其实不能 主要是因为 域名 协议 端口 不同都是跨域 -->
    <!-- a 是通过  http://a.ky.cn:3000/a.html -->

    HELLO-A
    <iframe src="http://b.ky.cn:3000/b.html" id='frame' onload="load()"></iframe>
    <script>
        document.domain = 'ky.cn'

        function load() {
            console.log(frame.contentWindow.a);
        }
    </script>
</body>
```
***
> b.html
```
<body>
    HELLO-B
    <script>
        document.domain = 'ky.cn'
        var a = 100;
    </script>
</body>
```