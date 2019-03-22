## 一、发送AJAX请求

### 1.简介
> vue本身不支持发送AJAX请求,需要使用 vue-resource( 1.0 )、axios( 2.0 推荐) 等第三方组件
   > > axios是一个基于Promise的HTTP请求客户端，用来发送请求，也是 vue2.0 官方推荐的 
参考: GitHub上搜索axios查看API文档 [axios GitHub地址](https://github.com/axios/axios) 


### 2.使用axios发送AJAX请求

#### 2.1 安装axios并引入

 - cnpm/npm install axios -S

#### 2.2 基本用法
- axios([options])
- axios.get(url[,options])
- axios.post(url,data,[options])


