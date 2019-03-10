## cors 跨域(主要是后端进行处理)
> 详情请看server2.js [B站视频地址](https://www.bilibili.com/video/av31173487?t=2151)

### 前端需要注意的点
 * 1.cookie 问题
 > document.cookie = '1121'; //cookie 不允许跨域但是可以强制带cookie跨域
 > xhr.withCredentials = true; //强制携带凭证 也就是cookie
 * 2.前端设置请求头
 > xhr.setRequestHeader('name', '1121'); //设置请求头
 * 3.获取后端发送过来的头
 > xhr.getResponseHeader('name')

 ### 后端几个基本配置
 ```
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
 ```
### 后端注意问题
* 1.如果是 PUT 请求 会有2个请求 一个是 PUT 一个是OPTIONS(预检)
    > 如果请求的是options 直接断开 options请求不做任何处理
    ```
    if (req.method === 'OPTIONS') {
        res.end()
    }
    ```