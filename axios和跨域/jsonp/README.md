## vue中如何使用 jsonp

### 1.安装jsonp
* 安装jsonp
> cnpm i vue-jsonp

### 2.将jsonp 配置到vue
* import jsonp from 'vue-jsonp'
* Vue.use(jsonp)
> 这样就可以使用jsonp了
 [B站视频链接](https://www.bilibili.com/video/av31173487?t=2151)

### 3.jsonp使用
* 在方法内使用 this.$jsonp 来调用 jsonp
* this.$jsonp(url地址,{请求的参数(注意加上callbackQuery和callbackName)}
```
    //https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=jQuery110205341938918837992_1552220597200&_=1552220597214

 this.$jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
        wd:"a", //这个是搜索关键字
        callbackQuery: 'cb', //请求地址的方法  看上面的url内就可以知道
　　    callbackName: 'show'}//请求返回后执行的方法 类型callback=show
    ).then(res=>{
         console.log('--------来自百度搜索------');
         this.list = res.s;
         console.log(res);
        }).catch(err=>{
          console.log(err);
        })
```
### jsonp问题
> (只能get 不能post delete put 而且不安全容易xss攻击)


