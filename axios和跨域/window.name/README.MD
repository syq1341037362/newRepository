## window.name(文件跨域获取数据) 借助iframe实现

### 需求
- 1.a.html和b.html是同域 同属于 http://localhost:3000
- 2.c.html 是 独立域 属于 http://localhost:4000
- 3.a.html 获取 c.html 的数据
***
### 实现
- 1.a.html先引用c.html(跨域不能直接拿值) c.html把值放到 window.name
- 2.瞬间把 a.html的引用改为b.html(a b 是同域) 虽然你更改了引用地址 但是window.name并不会消失
- 3.这样就可以 a.html 获取 b.html的window.name 就不会再出现跨域问题 因为 a b 同域
***

### 代码
> 首先 a.html有一个iframe 
```
  <iframe src="http://localhost:4000/c.html" frameborder="0" id='frame' onload="load()"></iframe>
```
> a.html的实现
***
```
    let first = true; //设置加载的标识符

    function load() {
        if (first) { //如果是第一次 也就是 加载 c 就执行
            let frame = document.getElementById('frame');
            frame.src = 'http://localhost:3000/b.html'; //瞬间修改路径指向 同域下的b 但是这时候window.name并不会消失
            first = false; //因为路径更改 load() 会再次执行 所以这里把 加载的标识符改为false 不执行 路径更改后load()方法
        } else {
            console.log(frame.contentWindow.name); //直接拿到window.name
        }

    }
```
***
> c.html
```
 window.name = '我不爱你'
```

