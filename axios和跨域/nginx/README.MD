## nginx跨域 使用和cros差不多

### 第一步 下载
- 1.下载nginx [nginx下载](http://nginx.org/en/download.html)
- 2.解压出来点击exe就可以使用了
- 3.目录结构如下
- -| config
- -| contrib
- -| docs
- -| html
- -| logs
- -| temp
- -| nginx.exe
***
### 第二步 配置nginx
> 1.找到 nginx.config
> 2.找到 location的位置 假设我们需要访问的是 nginx 下的 josn文件夹下的 a.json
> 3.为请求配置 需要注意的是 不能使用 : 结尾必须加上 ;
```
    //这里是基本的
    location / {
        root   html;
        index  index.html index.htm;
    }
    //这里是我们为请求 a.json 配置的 ~不区分大小写 *默认所有 \.json 是正则 匹配所有的json文件
    //nginx 的 跨域请求和 cors差不多 都是配置头部等信息
    location ~.*\.json {
        root   json;
        add_header "Access-Control-Allow-Origin" "*";
    }
```
***

### 第三步 页面请求nginx服务器
- 1.创建一个index.html页面
- 2.创建一个本地服务器 为跨域准备
- 3.发送请求到nginx服务器
***
> index.html 发送一个简单的xhr请求
```
    let xhr = new XMLHttpRequest;
    xhr.open('get', 'http://localhost/a.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                console.log(xhr.response)
            }
        }
    }
    xhr.send();
```
***
> server.js 配置一个简单的服务器 用于和nginx服务器跨域
```
    const express = require('express')

    const app = express();

    app.use(express.static(__dirname));

    app.listen(3000)
```
***
> nginx 配置了请求头等信息 就可以访问到 a.json了



