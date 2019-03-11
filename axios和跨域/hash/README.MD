## 利用hash来进行(页面间跨域)跨域 借助iframe实现
### [B站视频链接](https://www.bilibili.com/video/av31173487)

### 需求

- 1.a.html和b.html是同域 同属于 http://localhost:3000
- 2.c.html 是 独立域 属于 http://localhost:4000
- 3.a.html 获取 c.html 的数据
***

### 实现
- 1.a.html先引用c.html(跨域不能直接拿值) a把值放到hash上 c就可以取到a传递过来的hash 
- 2.判断a传递的hash是否正确之后 将得到的结果hash传递给b 因为 a b同域 所以可以直接获取
- 3.b.html将hash放入a.html的hash中 
- 3.在a.html中监听自己的hash改变 打印出 c 传递的结果
***

### 代码
> a.html
```
    <!-- 路径后面的hash值可以用来通信 -->
    <!-- 目的 a 想访问 c -->
    <!-- a 给 c 传递hash c收到hash值后  把 hash传给b b将结果放到a的hash中 -->

    <iframe src="http://localhost:4000/c.html#iloveyou"></iframe>

    <script>
        window.onhashchange = function() {
            //监听hash值的改变
            console.log(location.hash)
        }
    </script>
```
***
> c.html
```
    console.log(location.hash);//打印出a传递过来的hash
    let ifranme = document.createElement('iframe'); //创建一个iframe 
    ifranme.src = 'http://localhost:3000/b.html#idontloveyou' //把处理的结果传给b.html
    document.body.appendChild(ifranme); //一定要把这个iframe 放进页面 不然不执行
```
***
> b.html
```
    //这里的window.parent.parent其实就是 他的上次调用的上次调用 也就是 b -> c -> a
    window.parent.parent.location.hash = window.location.hash
```



