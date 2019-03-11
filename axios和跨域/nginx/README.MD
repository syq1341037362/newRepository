## nginx跨域 使用和cros差不多

### 第一步 下载
> 1.下载nginx [nginx下载](http://nginx.org/en/download.html)
> 2.解压出来点击exe就可以使用了
> 3.目录结构如下
> -| config
> -| contrib
> -| docs
> -| html
> -| logs
> -| temp
> -| nginx.exe
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