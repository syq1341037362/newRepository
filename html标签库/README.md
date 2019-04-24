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
<script src="./html5hiv.min.js"></script>
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