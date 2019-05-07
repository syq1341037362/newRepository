## html的标签

### 标题标签 h1 - h6
---
```
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```
---
### 块级标签 div
---
```
<!-- 块级标签 -->
<div>块级标签</div>
```
---
### 行内标签 span
---
```
<!-- 行内标签 -->
<span>行内标签 inline</span>
```
--- 
### 段落标签 p
---
```
<!-- 段落标签 -->
<p>段落标签</p>
```
--- 
### 图片标签 img
---
```
<!-- 图片标签 -->
<img src="http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg" alt="图片标签" title="图片标签">
```
---
### 超链接标签
---
```
    <!-- 超链接标签 -->
    <a href="https://www.baidu.com" title="百度首页">超链接标签</a>
```
---
### 表格标签 table tr td 
---
```
<!-- 表格标签 -->
<table border="1">
    <!-- tr 行 td 列 -->
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
</table>
```
---
### 有序列表 ul ol li 
---
```
<ul>
    <li>吃饭</li>
    <li>上学</li>
    <li>上课</li>
    <li>放学</li>
</ul>
<ol>
    <li>睡觉</li>
    <li>起床</li>
    <li>吃早饭</li>
    <li>看视频</li>
</ol>
```
---
### 按钮和输入标签
---
```
<!-- 按钮标签 -->
<button>按钮标签</button>
<!-- 输入标签 -->
<input type="text" value="输入标签">
```
---
### 加粗标签和斜体标签
---
```
 <!-- 加粗标签 -->
<strong>加粗标签</strong>
<!-- 斜体标签 em i  em有强调的作用-->
<em>em斜体标签 em有强调的作用</em>
<i>i斜体标签</i>
```
---

## html5 标签

### 兼容问题 html5 在IE9上是部分兼容 在IE8上完全不兼容
> * 如何解决 IE8 IE9 的不兼容问题呢？
```
// IE9 兼容问题主要是 IE9将一些标签解析成行内标签导致没有宽高的问题  解决办法 给所有 html5标签加上 display:block;
// IE8 兼容问题主要是在 IE8 本身就不支持 html5 所以他不能解析这些新的标签 解决办法有两种
// IE8 兼容第一种方式 在解析标签之前创建这些标签 并且给这些标签添加 css display:block属性
<style>
 article,
 aside,
 dialog,
 footer,
 header,
 section,
 footer,
 nav,
 figure,
 menu {
    display: block
}
</style>
<script>
    //兼容IE8 IE9 及以下第一种方式在解析到标签之前创建标签 需要对应的标签变为块级标签 因为创建出来的都是行内标签
    document.createElement("header");
    document.createElement("nav");
    document.createElement("main");
    document.createElement("article");
    document.createElement("aside");
    document.createElement("footer");
</script>


// IE8 兼容第二种方式 利用第三方的兼容js 例如 html5hiv.js 在标签解析之前引入js 然后在css样式中将这些标签从行内标签转换为块级标签 最好在head中就引用 如下

<head>
<!--  // 兼容IE8 IE9 及以下第二种方式也是最常用的 引入兼容js 注意一定要在标签解析之前引用 -->
<!--[if lt IE 9]> <script src="./html5hiv.min.js"></script> <![endif]-->
</head>

<style>
 article,
 aside,
 dialog,
 footer,
 header,
 section,
 footer,
 nav,
 figure,
 menu {
    display: block
}
<body>
    <script>
        // 兼容IE8 IE9 及以下第一种方式在解析到标签之前创建标签 需要对应的标签变为块级标签 因为创建出来的都是行内标签
        // document.createElement("header");
        // document.createElement("nav");
        // document.createElement("main");
        // document.createElement("article");
        // document.createElement("aside");
        // document.createElement("footer");
    </script>
    <header>头部</header>
    <nav>导航</nav>
    <main>
        <article>左边</article>
        <aside>右边</aside>
    </main>
    <footer>底部</footer>

</body>
```
### html5 表单中的input新增的type类型 *email* *tel* *url* *number* *range* *color* *time* *date* *datetime-local* *month* *week*
---
```
<body>
    <form action="" onsubmit="return check()">
        <label>用户名：</label> <input type="text" name="userName"><br>
        <label>密码：</label> <input type="password" name="userPwd"><br>
        <!-- email提供了默认的电子邮箱的完整验证：要求必须包含@符号 同时必须包含服务器的名称 -->
        <label>邮箱：</label> <input type="email" name="email"><br>
        <!-- tel 并不是用来实现验证 本质是在移动端打开数字键盘 -->
        <label>电话：</label> <input type="tel" name="tel"><br>
        <!-- 必须是一个合法的url -->
        <label>网址：</label> <input type="url" name="url"><br>
        <!-- 可以设定最大值 默认值 和最小值 -->
        <label>数量：</label> <input type="number" value="20" min="0" max="100"><br>
        <!-- search 提供人性化的输入体验 删除 -->
        <label>请输入商品名称：</label> <input type="search" value=""><br>
        <!-- range：范围 -->
        <label>范围：</label> <input type="range" value="50" min="0" max="100"><br>
        <!-- 颜色拾取 -->
        <label>颜色拾取：</label> <input type="color"><br>
        <!-- time 时分秒 -->
        <label>时间</label> <input type="time"><br>
        <!-- 日期 年月日-->
        <label>日期</label> <input type="date"><br>
        <!-- 年月日时分秒 现在大多数浏览器都不支持datetime-->
        <label>时间日期</label> <input type="datetime"><br>
        <!-- 日期时间 -->
        <label>时间日期</label> <input type="datetime-local"><br>
        <!-- 月份 -->
        <label>月份</label> <input type="month"><br>
        <!-- 星期 -->
        <label>星期</label> <input type="week"><br>
        <input type="submit" value="提交">
    </form>
    <script>
        function check() {
            var email = document.querySelectorAll("input[type=email]")[0].value;
            if (email != "" && email != null && email != undefined) {
                return true;
            } else {
                return false;
            }
        }
    </script>
```
---
### html5 表单中的input新增的属性 placeholder提示文本 autofocus 自动获取焦点 autocomplete 自动提示 required 必填  pattern正则  multiple多个文件或者邮箱(多个邮箱用 ， 分隔)  form 将不包含在表单中的元素挂载到指定的表单上(通过表单的id)表单在进行数据提交的时候就会把这个元素的数据一起提交 
> * 需要注意 autocomplete 自动提示需要3个前提条件 1.必须成功提交过 2.设置 autocomplete 的元素必须有name属性 3.autocomplete的值设置为 on 打开
---
```
<form action="" onsubmit="return check()" id="myForm">
    <!-- placeholder提示文本 -->
    <!-- autofocus 自动获取焦点-->
    <!-- autocomplete 自动提示 1.必须成功提交过 2.当前添加autocomplete的元素必须有name属性 -->
    <label>用户名：</label> <input type="text" name="userName" placeholder="请输入" autofocus autocomplete="on"><br>

    <!-- tel并不会验证 只是在手机端弹出数字键盘 -->
    <!-- required 必须输入 -->
    <!-- pattern 正则表达式验证 -->
    <!-- 
        * 代表任意 
        ? 代表0个或者1个
        + 代表1个或多个
    -->
    <label>手机号：</label> <input type="tel" name="tel" required pattern="^(\+86)?1\d{10}$"><br>
    <!-- multiple 选择多个文件 -->
    <label>文件：</label> <input type="file" name="file" multiple><br>
    <!-- 多个邮箱也用 multiple 要以逗号分隔 -->
    <label>多个邮箱：</label> <input type="email" name="email" multiple><br>
    <input type="submit" value="提交">
</form>

<!-- 下面这个表单元素并没有包含在 form中 默认情况下表单元素的数据不会进行提交  -->
<!-- form指定表单的id 那么将来指定id的form的表单在进行数据提交的时候 也会将当前的表单元素的数据一起提交 -->
    <label>地址：</label><input type="text" name="address" form="myForm">
```
---

### html5 表单新增的元素 datalist(配合input使用 他们之间的关联是靠 input标签的list属性绑定datalist的id) 
> * 注意3个问题 1. option可以是单标签也可以是双标签 2.如果你的input 的 type 类型是 url 那么必须在datalist下的option中的value中加上 http 因为他必须是一个完整的网页地址 不然不显示 3.火狐不显示datalist下的option的value值 且必须双击才显示label值
---
```
<form action="">
    <!-- 不仅可以选择 还应该可以输入 -->
    专业：<input type="text" list="subjects">
    <!-- 通过datalist创建选项列表 -->
    <!-- 建立输入框和datalist的关联 list="datalist的id" -->
    <datalist id="subjects">
        <!-- 创建选项值 value:具体值  label:提示信息 辅助值 -->
        <!-- option可以是单标签也可以是双标签 -->
        <option value="python" label="大数据" />
        <option value="前端与移动开发" label="前景非常好"></option>
        <option value="java" label="使用人数多"></option>
        <option value="javascript" label="做特效"></option>
        <option value="c++" label="不知道"></option>
    </datalist>

    <!-- 如果input输入框的type类型是url,那么 value值必须添加http -->
    网址：<input type="url" list="urls">
    <datalist id="urls">
        <option value="http://www.baidu.com" label="百度"></option>
        <option value="http://www.sohu.com" label="搜狐"></option>
        <option value="http://www.163.com" label="163"></option>
    </datalist>
</form>
```
---

### html5 表单新增的事件 oninput oninvalid 
* 需要注意的点 
> 1. 需要注意 oninput和onkeyup的区别(键盘弹起的时候触发 每一个键的弹起都会触发一次,oninput不管你是否按键只要值改变就触发) 
> 2. oninvalid 只有在验证不通过才触发 所以必须有一个验证属性 pattern 
> 3. this.setCustomValidity()是修改默认显示信息的 也就是验证不通过的提示信息
---
```
<body>
    <form action="">
        用户名：<input type="text" name="userName" id="userName"><br>
        <!--  -->
        电话：<input type="tel" name="userPhone" id="userPhone" pattern="^1\d{10}">
        <!--  -->
        <input type="submit">
    </form>
    <script>
        //1.oninput：监听当前指定元素内容的改变 只要内容改变（内容添加删除），就会触发这个事件
        document.getElementById("userName").oninput = function() {
            console.log("oninput:" + this.value);
        };
        //onkeyup：键盘弹起的时候触发 每一个键的弹起都会触发一次
        document.getElementById("userName").onkeyup = function() {
            console.log("onkeyup:" + this.value);
        };

        //oninvalid:当验证不通过时触发
        document.getElementById("userPhone").oninvalid = function() {
            //this.setCustomValidity 是用来修改默认的提示信息
            this.setCustomValidity("手机号码不正确")
        };
    </script>
</body>
```
---

### html5的进度条 progress进度条 meter度量器
* 需要注意的点
> 1. progress不写 value值或者都不写会重复循环
> 2. meter度量器的属性 hign 规定的较高的值 low:规定的较低的值 max:最大值 min:最小值 value:当前度量值
---
```
<body>
    <!-- 进度条progress max最大值 value当前值 不写就循环-->
    <progress max="100" value="50"></progress>

    <!-- 度量器 衡量当前进度值-->
    <!-- hign 规定的较高的值
        low:规定的较低的值
        max:最大值
        min:最小值
        value:当前度量值
    -->
    <meter max="100" min="0" high="80" low="40" value="30"></meter>
    <meter max="100" min="0" high="80" low="40" value="60"></meter>
    <meter max="100" min="0" high="80" low="40" value="90"></meter>

</body>
```
---
### html5的媒体标签 audio 和 video (之前是通过 embed标签或者flash)
> 1. 不管是audio还是video都要有controls不然无法显示控制器 也就是进度条等
> 2. Chrome 58+添加 controlsList="nodownload"禁止下载 添加oncontextmenu="return false" 禁止右键下载
> 3. audio和video具有的属性  autoplay自动播放 loop循环播放
> 4. video需要注意设置宽高一般情况下只会设置一个 让其自动适应 如过设置2个除非是等比例的
---
```
<!-- embed：直接插入视频文件 :本质是调用本级上已经安装的软件 有兼容性 -->
<!-- flash插件：安装flash 1.学习flash,增加使用成本 2.苹果设备不支持flash -->
<!-- audio:音频 必须添加controls 
    autoplay自动播放 
    loop循环播放  
    Chrome 58+添加 controlsList="nodownload"禁止下载 
    添加oncontextmenu="return false" 禁止右键下载-->
<audio src="./static/1.mp3" controls="true" autoplay loop controlsList="nodownload" oncontextmenu="return false"></audio>
<!-- video：视频 -->
<!-- 属性值 
    autoplay自动播放 
    loop循环播放  
    width:宽度 注意设置宽高一般情况下只会设置一个 让其自动适应 如过设置2个除非是等比例的
    height:高度
    poster:当视频还没有完全下载或者用户还没有点击播放前显示的封面 默认显示当前视频文件的第一幅画面
    
-->
<!-- <video src="./static/1.flv" poster="./static/1.png" controls="true" autoplay controlsList="nodownload" oncontextmenu="return false"></video> -->
<video controls controlsList="nodownload" oncontextmenu="return false" autoplay poster="./static/1.png">
    <source src="./static/1.flv" type="video/flv">
    <source src="./static/1.mp4" type="video/mp4">
        您的浏览器不支持播放当前视频
</video>
```
---
### html5中操作dom的新方法 querySelector
> 1. 之前是用 document.getElementById 或者 document.getElementsByTagName 或者document.getElementsByClassName 等
> 2. querySelector() 支持 标签 类 id 选择器 根据不同的需要自己选择
> 3. querySelector() 返回的是单个元素 即使多个也返回多个中的第一个(例如多个li有同一个class属性red 使用 querySelector(".red") 只会返回满足条件的第一个)
> 4. 查询多个元素 请使用 querySelectorAll() 同样支持 标签 类 id 选择器 根据不同的需要自己选择
---
```
<body>
    <ul>
        <li class="red" id="red">前端</li>
        <li class="blue" id="blue">java</li>
        <li class="green" id="green">c++</li>
        <li class="pink" id="pink">python</li>
        <li class="gray" id="gray">php</li>
    </ul>
    <script>
        // 获取第一个li标签
        window.onload = function() {
            //之前获取Dom

            //TagName获取的是数组  
            document.getElementsByClassName
            //索引不直观 数据都是从后台动态获取 前台动态生成添加
            // var cli = document.getElementsByTagName("li")[0];
            // console.log(cli);

            //html5获取Dom

            //html5中使用querySelector(传入选择器的名称) query查询 Selector选择器(支持标签 类 id)
            //querySelector获取单个元素 即使多个也返回多个中的第一个
            //如果多个请使用querySelectorAll

            //单个
            var javaLiByTagName = document.querySelector("li");
            var javaLiByClass = document.querySelector(".red");
            var javaLiById = document.querySelector("#red");
            console.log(javaLiByTagName);
            console.log(javaLiByClass);
            console.log(javaLiById);


            //多个返回的是所有满足条件的元素数组
            var liByTag = document.querySelectorAll("li");
            var liByClass = document.querySelectorAll(".red");
            var liById = document.querySelectorAll("#red");
            console.log(liByTag);
            console.log(liByClass);
            console.log(liById);
        }
    </script>
</body>
```
---
### html5操作元素类属性classList 添加add() 删除remove() 获取classList.item(指定数组下标) 切换toggle() 判断是否含有某个类contains()
> 1. classList.add() 为指定的元素添加一个类样式 如果添加多个和className相同 直接classList ="你要添加的多个样式 空格隔开"
> 2. classList.remove() 为指定的元素移除一个类样式 如果移除所有和className相同 直接classList =""
> 3. classList.toggle() 为指定元素切换样式 如果指定元素没有此样式就添加如果有就移除
> 4. classList.contains() 判断指定元素是否含有指定的样式 返回true或false
---
```
<body>
    <ul>
        <li>Java</li>
        <li class="blue underline" id="JavaScript">JavaScript</li>
        <li>C++</li>
        <li class="pink">Python</li>
    </ul>
    <div>
        <input type="button" value="为第一个 li 元素添加样式" id="add" onclick="add(1)">
        <input type="button" value="为第一个 li 元素添加多个样式" id="addmore" onclick="add(0)">
    </div>
    <div>
        <input type="button" value="为第二个li元素移除某一个样式" id="remove" onclick="remove(1)">
        <input type="button" value="为第二个li元素移除所有样式" id="remove" onclick="remove(0)">
    </div>
    <input type="button" value="为第三个li元素切换样式" id="toggle" onclick="toggle()">
    <input type="button" value="判断第四个li元素是否包含某个样式" id="contain" onclick="contain()">

    <script>
        function add(size) {

            // classList.add 为指定元素添加指定名称的样式 一次只能添加一个样式
            if (size == 1) {
                //add方法只能添加一个样式 如果添加多个样式需要重复写
                document.querySelector("li").classList.add("red");

            } else {
                //下面是一次性添加多个 注意空格隔开
                document.querySelector("li").classList = "red underline";
            }
        }

        function remove(size) {

            // classList.remove 为指定元素添加指定名称的样式 一次只能移除一个样式(移除的是样式 不是class属性)
            if (size == 1) {
                //remove方法只能移除一个样式 如果移除多个样式需要重复写
                document.querySelector("#JavaScript").classList.remove("blue");

            } else {
                //下面是移除所有
                if (document.querySelector("#JavaScript").classList.length === 0) {
                    return false;
                } else {
                    document.querySelector("#JavaScript").classList = "";
                }

            }
        }

        function toggle() {
            // classList.toggle 为指定元素切换样式 如果指定元素没有此样式就添加如果有就移除
            document.querySelectorAll("li")[2].classList.toggle("green");
        }

        function contain() {
            // classList.contains 判断指定元素是否含有指定的样式 返回true或false
            var flag = document.querySelectorAll("li")[3].classList.contains("pink");
            console.log(flag);
        }
        
        //获取指定元素的类名 通过数组下标
         document.querySelectorAll("li")[1].onclick = function() {
            console.log(this.classList.item(0));
        }
    </script>
</body>
```
---

### html5中的自定义属性 data- (使用驼峰命名法来获取定义的值)
> 1. data开头
> 2. data-后后必须至少有一个字符,多个单词用-连接
> 3. 名称都应该使用小写 --不要包含任何的大些字符
> 4. 名称中不要有任何特殊符号 不要使用纯数字
> 5. 取值必须使用驼峰命名法来拼接
---
```
<body>
    <!-- 1.定义 -->
    <!-- 规范：
        1.data开头
        2.data-后后必须至少有一个字符,多个单词用-连接
        建议
        1.名称都应该使用小写 --不要包含任何的大些字符
        2. 名称中不要有任何特殊符号 
        3.名称不要使用纯数字
    -->
    <!-- 2.取值 -->
    <p data-test-name="test">测试显示</p>
    <span data-msg="msg">消息</span>
    <a href="#" data-a-val-show="a标签">aaa</a>
    <script>
        //获取自定义属性值
        window.onload = function() {
            var p = document.querySelector("p");
            //获取自定义属性值
            //将data-后面的单词使用驼峰命名法来连接 必须使用驼峰命名合法获取否则有可能无法获取到值
            var val = p.dataset["testName"];
            console.log(val + "--");

            //------------------------------
            var span = document.querySelector("span")
            var span_val = span.dataset["msg"];
            console.log(span_val + "***");

            //------------------------------
            var a = document.querySelector("a")
            var a_val = a.dataset["aValShow"];
            console.log(a_val + "///");
        }
    </script>
</body>
```
---

### html5网络接口事件 ononline onoffline
> 1. 为了兼容移动端 最好不要使用 window.ononline / window.onoffline 推荐使用addEventListener添加事件
> 2. 可能会有缓存问题
---
```
<script>
    //为了兼容移动端 最好不要直接写 window.ononline/window.onoffline
    //推荐使用addEventListener添加事件
    //ononline:当网络连通时 触发
    window.addEventListener("online", function() {
        alert("网络连通了")
    })

    //onoffline:当网络断开时 触发
    window.addEventListener("offline", function() {
        alert("网络断开了")
    })
</script>
```
---

### html5全屏事件  requestFullScreen()开启全屏 cancelFullScreen()退出全屏 fullScreenElement()是否全屏
> 1. 不管是 **开启** 还是 **退出** 还是 **检测是否全屏** 都需要浏览器兼容 兼容方法 加浏览器前缀
> 2. **退出** 这个方法 默认的不是cancelFullScreen() 而是exitFullscreen() 哈哈没想到吧
> 3. **检测是否是全屏** IE好像不支持可以用别的替代
---
```
//全屏代码
<body>
    <div>
        <img src="./static/1.png" alt="">
        <input type="button" id="full" value="全屏">
        <input type="button" id="cancelFull" value="退出全屏">
        <input type="button" id="isFull" value="是否全屏">
    </div>
    <script>
        //全屏操作的主要方法和属性 存在兼容性问题需要添加浏览器前缀(谷歌和火狐暂时是可以不加前缀的IE至少是11)
        // google 谷歌浏览器 webkit
        //firefox 火狐浏览器 moz
        //IE      IE浏览器   ms
        //opera   欧朋浏览器 o
        /*
            1. requestFullScreen() //开启全屏显示
            2. cancelFullScreen()  //退出全屏显示 默认的是exitFullScreen()
            3. fullScreenElement() //是否是全屏状态
        */
        window.onload = function() {
            var div = document.querySelector("div");
            //添加三个按钮的点击事件

            //全屏操作
            document.querySelector("#full").onclick = function() {
                //默认的
                // div.requestFullscreen();

                //谷歌浏览器
                // div.webkitRequestFullScreen();

                //火狐浏览器
                // div.mozRequestFullScreen();

                //IE浏览器
                // div.msRequestFullscreen();

                //使用能力测试添加不同浏览器的前缀
                qz(div);

            };

        };
        //能力测试 测试浏览器是哪一种全屏方式
        function qz(ele) {
            if (ele.requestFullScreen) { //默认
                ele.requestFullScreen();
            } else if (ele.webkitRequestFullScreen) { //google
                ele.webkitRequestFullScreen();
            } else if (ele.mozRequestFullScreen) { //firefox
                ele.mozRequestFullScreen();
            } else if (ele.msRequestFullscreen) { //IE
                ele.msRequestFullscreen();
            }
        }
    
    </script>
</body> 
```
---
---
```
//退出全屏
document.querySelector("#cancelFull").onclick = function() {
    //默认的
    // document.exitFullscreen();

    //谷歌浏览器
    // document.webkitCancelFullScreen();

    //火狐浏览器
    // document.mozCancelFullscreen();

    //IE浏览器
    // document.msExitFullscreen();
    exit()

};
//能力测试 测试浏览器是哪一种全屏方式
function exit() {
    if (document.exitFullscreen) { //默认
        document.exitFullscreen();
    } else if (document.webkitCancelFullScreen) { //google
        document.webkitCancelFullScreen();
    } else if (document.mozCancelFullscreen) { //firefox
        document.mozCancelFullscreen();
    } else if (document.msExitFullscreen) { //IE
        document.msExitFullscreen();
    }
}
```
---
---
```
//检测是否为全屏
 document.querySelector("#isFull").onclick = function() {
    if (isFull()) {
        alert("当前是全屏")
    } else {
        alert("当前没有开启全屏")
    }

}
//能力测试 测试浏览器是否全屏 IE 有点问题就不写了
function isFull() {
    if (document.fullscreenElement) { //默认
        return document.fullscreenElement
    } else if (document.webkitFullScreenElement) { //google
        return document.webkitFullScreenElement
    } else if (document.mozkitFullScreenElement) { //firefox
        return document.mozkitFullScreenElement
    }
}
```
---

### html5的 FileReader(读取文件)  FileReader 提供了一个完整的事件模型 用来捕获读取文件是的状态
* __FileReader的DataURL FileReader 提供了一个完整的事件模型 用来捕获读取文件是的状态__
> 1. 读取文件获取一段以data开头的字符串 这段字符串的本质就是DataURL DataURL是一种将文件（----这个文件一般就是指图像或者能够嵌入到文档的文件格式等----）嵌入到文档的一种方案 DataURL是将资源转化为Base64编码的字符串并且将这些内容存储在url中>>优化网站的加载速度和执行的效率
> 2. 主要事件 **onabort：读取文件中断时触发**
> 3. 主要事件 **onerror：读取文件错误时触发**
> 4. 主要事件 **onload：文件读取成功完成时触发**
> 5. 主要事件 **onloadend：读取完成时触发无论成功还是失败**
> 6. 主要事件 **onloadstrat：开始读取时触发**
> 7. 主要事件 **onprogress：读取文件过程中持续触发**
> 8. 实时预览需要的就是 **onload** 

---
```
//注意 1.readAsDataURL 没有返回值但是（---读取完---）会将文件的读取结果存储在文件读取对象的result中 
//注意 2.readAsDataURL()需要传递一个blob(binary large object 二进制大文件)一般是图片或者其他可以嵌入到文档的类型
//需求文件上传之前的预览
<body>
    <!-- 需求 即时预览 -->
    <!-- 
        及时：当用户选择完图片之后就立刻进行预览的处理 >>onchange()
        预览：通过文件读取对象的readAsDataURL()完成
     -->
    <form action="">
        <label for="myFile">文件</label>
        <input type="file" name="myFile" id="myFile" onchange="fileRead()">
        <input type="submit" value="提交">
    </form>
    <img src="" alt="">
    <script>
        //FileReader：读取文件内容
        //1.readAsText():读取文本文件(可以使用Txt打开的文件) 返回的是文本字符串 默认编码是UTF-8
        //2.readAsBinaryString():Binary(二进制) 读取任意类型的文件 返回二进制字符串。 通常这个方法不是用来读取文件给用户看而是存储文件 例如使用readAsBinaryString()读取文件发送给后台后台接收到数据再进行存储
        //3.readAsDataURL():读取文件获取一段以data开头的字符串 这段字符串的本质就是DataURL DataURL是一种将文件（----这个文件一般就是指图像或者能够嵌入到文档的文件格式等----）嵌入到文档的一种方案 DataURL是将资源转化为Base64编码的字符串并且将这些内容存储在url中>>优化网站的加载速度和执行的效率

        function fileRead() {
            //1.创建文件读取对象
            //2.读取文件 获取DataURL  
            //说明 1.readAsDataURL 没有返回值但是（---读取完---）会将文件的读取结果存储在文件读取对象的result中  2.readAsDataURL()需要传递一个blob(binary large object 二进制大文件)一般是图片或者其他可以嵌入到文档的类型

            var reader = new FileReader();
            var file = document.querySelector("#myFile").files;
            reader.readAsDataURL(file[0]);
            //监听文件是否读取完成 
            //FileReader 提供了一个完整的事件模型 用来捕获读取文件是的状态
            // onabort：读取文件中断时触发 ---- onerror：读取文件错误时触发 ---- onload：文件读取成功完成时触发  ---- onloadend：读取完成时触发无论成功还是失败 ----onloadstrat：开始读取时触发 ---- onprogress：读取文件过程中持续触发
            // 获取数据
            reader.onload = function() {
                //展示
                document.querySelector("img").src = reader.result;

            }


        }
    </script>
</body>
```
---

### html5的拖拽事件 
* 首先需要拖拽的元素必须添加 draggable="true" 图片和超链接默认支持拖拽
* 需要在 ondragover中阻止浏览器的默认行为 因为不阻止默认行为 ondrap不执行
* 被拖拽元素的方法 
    > 1. //ondrag       应用于拖拽元素 整个拖拽过程都会调用（持续触发）
    > 2. // ondragstart  应用于拖拽元素 当拖拽开始时调用
    > 3. // ondragleave  应用于拖拽元素 当鼠标离开拖拽元素的范围时调用
    > 4. // ondragend    应用于拖拽元素 当拖拽结束时调用
* 目标元素的方法
    > 1. ondragenter      应用于目标元素 当拖拽元素进入时调用
    > 2. ondragover       应用于目标元素 当停留在目标元素上时调用
    > 3. ondrop           应用于目标元素 当在目标元素上松开鼠标时调用
    > 4. ondragleave      应用于目标元素 当鼠标离开目标元素时调用
---
```
<body>
    <div class="div1" id="div1">
        <!-- 在h5中 如果想拖拽元素，就必须为元素添加 draggable="true" 图片和超链接默认就可以拖拽 -->
        <p id="pe" draggable="true">试着把我拖过去</p>
    </div>
    <div class="div2" id="div2"></div>
    <script>
        /*学习拖拽。主要是学习拖拽事件*/
        /*1.应用于拖拽元素的事件 */
        // ondrag       应用于拖拽元素 整个拖拽过程都会调用（持续触发）
        // ondragstart  应用于拖拽元素 当拖拽开始时调用
        // ondragleave  应用于拖拽元素 当鼠标离开拖拽元素的范围时调用
        // ondragend    应用于拖拽元素 当拖拽结束时调用

        var p = document.querySelector("#pe");
        p.ondrag = function() {
            console.log("ondrag");
        }
        p.ondragstart = function() {
            console.log("ondragstart");
        }
        p.ondragleave = function() {
            console.log("ondragleave");
        }
        p.ondragend = function() {
            console.log("ondragend");
        }

        /*2.应用于目标元素的事件 */
        // ondragenter      应用于目标元素 当拖拽元素进入时调用
        // ondragover       应用于目标元素 当停留在目标元素上时调用
        // ondrop           应用于目标元素 当在目标元素上松开鼠标时调用
        // ondragleave      应用于目标元素 当鼠标离开目标元素时调用
        var div2 = document.querySelector("#div2");
        var div1 = document.querySelector("#div1");
        div2.ondragenter = function(e) {
            console.log("元素进入目标元素区域");
            e.preventDefault();
        }
        div2.ondragover = function(e) {

                console.log("元素正在目标元素上停留");
                e.preventDefault();

                /* 如果想触发ondrop 那么必须在ondragover中阻止浏览器的默认行为 */
            }
            /*默认不被触发 因为浏览器阻止触发 ondrop  必须在ondragover 中阻止浏览器的默认行为*/
        div2.ondrop = function(e) {
            console.log("您在目标元素上松开了鼠标");
            /*添加被拖拽的元素*/
            div2.appendChild(p);
        }
        div2.ondragleave = function(e) {
            console.log("鼠标离开目标元素");
        }
        div1.ondragover = function(e) {
            e.preventDefault();
        }
        div1.ondrop = function(e) {
            console.log("您在目标元素上松开了鼠标");
            /*添加被拖拽的元素*/
            div1.appendChild(p);
        }
    </script>
</body>
```
---
#### 5.1 html5元素拖拽 使用 document 让所有元素拖拽 使用 dataTranser保存元素
* 注意dataTranser.setData() 有2个参数 一个是 **format 数据类型** 一个是**data 值**
* format 有2中类型  text/html 字符串 text/uri-list 链接
* dataTranser.setData()的值 只能在drop中获取
---
```
<body>
    <div class="div1" id="div1">
        <!-- 在h5中 如果想拖拽元素，就必须为元素添加 draggable="true" 图片和超链接默认就可以拖拽 -->
        <p id="pe" draggable="true">试着把我拖过去1</p>
        <p id="pe2" draggable="true">试着把我拖过去2</p>
    </div>
    <div class="div2" id="div2"></div>
    <div class="div3" id="div3"></div>
    <script>
       
        document.ondrag = function() {

        };
        document.ondragstart = function(e) {
            /*通过事件捕获来获取当前被拖拽的子元素*/
            // 通过dataTransfer存储值;
            //setData(format,data);  text/html text/uri-list
            //format 数据类型
            //data 数据 一般来说是字符串值
            e.dataTransfer.setData("text/html", e.target.id)
        }
        document.ondragleave = function() {

        };
        document.ondragend = function(e) {
            e.target.style.opacity = 1;
            e.target.parentNode.style.borderWidth = "2px";
        };

        document.ondragenter = function(e) {
            e.preventDefault();
            console.log(e.target);
        };
        document.ondragover = function(e) {

            e.preventDefault();

            /* 如果想触发ondrop 那么必须在ondragover中阻止浏览器的默认行为 */
        };
        /*默认不被触发 因为浏览器阻止触发 ondrop  必须在ondragover 中阻止浏览器的默认行为*/
        document.ondrop = function(e) {
            /*添加被拖拽的元素*/
            //通过dataTransfer存储的值只能在drop事件中获取
            var id = e.dataTransfer.getData("text/html");
            e.target.appendChild(document.getElementById(id));
            console.log(id);

            // e.target.appendChild();
        };
        document.ondragleave = function(e) {

        };
    </script>
</body>
```
---
### html5的存储 sessionStorage 和 localStorage
> 1. **sessionStorage** 和 **localStorage** 的区别 一个是临时储存(存储在页面上) 一个是浏览器储存 存储在浏览器中 根据不同需要使用
> 2. 方法 setItem() getItem() removeItem() clear() 注意clear()使用需谨慎 它清空所有的
---
```
<body>
    <p>sessionStorage 存储容量大概5M</p>
    <p>参数1：setItem(key,value) 存储数据以键值对的形式</p>
    <p>参数2：getItem(key) 获取数据</p>
    <p>参数3：removeItem(key) 通过制定名称的key删除对应的内容</p>
    <p>参数3：clear() 清空所有存储的内容</p>
    <input type="text" id="userName"><br>
    <input type="button" value="设置数据" id="setData">
    <input type="button" value="获取数据" id="getData">
    <input type="button" value="删除数据" id="removeData">
    <script>
        document.querySelector("#setData").onclick = function() {
            var name = document.querySelector("#userName").value;
            window.sessionStorage.setItem("userName", name);
            console.log(window.sessionStorage.getItem("userName"));
        }
        document.querySelector("#getData").onclick = function() {
            console.log(window.sessionStorage.getItem("userName"));
        }
        document.querySelector("#removeData").onclick = function() {
            window.sessionStorage.removeItem("userName");
            console.log("清除成功");
        }
    </script>
</body>
```
---