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