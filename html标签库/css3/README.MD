### html5的属性选择器( 属性选择器 ：属性是相对于标签而言 所谓的属性选择器就是根据指名称的属性的值来查找元素)
> 1. E[attr]:查找指定的拥有attr属性的E标签  查找拥有style属性的li标签
> 2. E[attr=value] 查找指定的拥有attr属性并且值为value的 E标签 = 是严格匹配 
> 3. E[attr*=value] 查找指定的拥有attr属性并且值中包含(可以在任意位置)value的 
> 4. E[attr^=value] 查找指定的拥有attr属性并且值中以value开头的 
> 5. E[attr$=value] 查找指定的拥有attr属性并且值中以value结束的
---
```
<style>
    /* 1.E[attr]:查找指定的拥有attr属性的E标签  查找拥有style属性的li标签 */
    li[style] {
        text-decoration: underline;
    }

    /* 2. E[attr=value] 查找指定的拥有attr属性并且值为value的 E标签 = 是严格匹配 */
    li[class='red'] {
        font-size: 30px;
    }

    /* 3. E[attr*=value] 查找指定的拥有attr属性并且值中包含(可以在任意位置)value的 */
    li[class *='red'] {
        border: 3px solid #999999;
    }

    /* 4. E[attr^=value] 查找指定的拥有attr属性并且值中以value开头的 */
    li[class^='blue'] {
        color: pink
    }

    /* 5. E[attr$=value] 查找指定的拥有attr属性并且值中以value结束的 */
    li[class$='blue'] {
        color: green;
    }
</style>
<body>
    <p style="">看看不能不也添加样式</p>
    <li class="red" style="">测试显示1</li>
    <li class="blue">测试显示2</li>
    <li class="darkred" style="">测试显示3</li>
    <li class="blue">测试显示4</li>
    <li class="red">测试显示5</li>
    <li class="blueviolet">测试显示6</li>

</body>
```
---
### html5中的兄弟伪类选择器 + 和 ~
> 1. **+** 代表相邻元素
> 2. **~** 代表兄弟元素
---
```
<style>
    .first {
        color: red;
    }
    /* 兄弟伪类有两种一种是 + 一种是 ~ */
    /* + 获取当前元素相邻的满足条件的元素 */
    /* ~ 获取当前元素的满足条件的兄弟元素 */
    /* 下面这句样式说明查找： 添加了.first样式的标签相邻的li元素 
        1.必须是相邻的
        2.必须是指定类型的元素
     */
    
    .first+li {
        color: blue;
    }
    /* 下面样式查找添加了 .first样式的元素的所有兄弟元素
        1.必须是指定类型的元素
    */
    
    .first~li {
        color: hotpink;
    }
</style>

<body>
    <li class="first">web前端</li>
    <span>能不能变成蓝色？</span>
    <li>java</li>
    <li>javascript</li>
    <li>c++</li>
    <li>python</li>
</body>
```
---
### css3的相对于父级元素的伪类选择器 注意这些伪类选择器都是查找父级元素下的
* 第一种 **first-child() last-child()**; 在查找的时候并不会限制查找的元素的类型 如果第一个元素不是你指定的元素则不起作用
---
```
<style>
    /*相对于父元素的结构伪类*/
    /*1. E:first-child: 查找E元素的父级元素中的第一个E元素 在查找的时候并不会限制查找的元素的类型*/
    /* 下面这句样式查找 li的父级元素的第一个li元素
        1.相对于当前指定元素的父元素
        2. 查找的类型必须是指定的类型
    */
    li:first-child {
    color: red;
    }

    /*2. E:first-child: 查找E元素的父级元素中的最后一个E元素 在查找的时候并不会限制查找的元素的类型*/

    li:last-child {
    background-color: skyblue;
    }
</style>
```
---
* 第二种 **first-of-type() last-of-type()** 在查找的时候会限制查找的元素的类型必须是你指定类型的 过滤掉其他类型的元素
---
```
<style>
        /* 在查找的时候限制类型 :first-of-type 
            1.也是相对于父元素
            2.在查找的时候只会查找满足类型条件的元素 过滤掉其他类型的元素
        */
        
        li:first-of-type {
            background-color: hotpink
        }
        
        li:last-of-type {
            font-size: 40px;
        }
</style>
```
---
* 第三种 指定索引位置 **li:nth-child(从1开始的索引 || 关键字 || 表达式)** 不会限制查找元素的类型
---
```
<style>
    /*指定索引位置 li:nth-child(从1开始的索引 || 关键字 || 表达式) 不会限制查找元素的类型 */

    /* 索引 */
    li:nth-child(5) {
        background-color: lightblue;
    }

    /*关键字 奇数或者偶数 */
    li:nth-child(even) {
        background-color: orange;
    }
    
    li:nth-child(odd) {
        background-color: purple;
    }

    /* 表达式 为前面的5个元素添加样式*/
    li:nth-child(-n+5) {
        color: #ffffff;
    }
    /* 表达式 为后面的5个元素添加样式*/
    li:nth-last-child(-n+5) {
        font-weight: bold;
        color: aqua;
    }
</style>
```
---
* 第四种 **nth-of-type(从1开始的索引 || 关键字 || 表达式)** 指定索引位置 限制元素的类型
---
```
<style>
    /*指定索引位置 li:nth-of-type(从1开始的索引 || 关键字 || 表达式) 会限制查找元素的类型 */

    /* 索引 */
    li:nth-of-type(5) {
        background-color: lightblue;
    }

    /* 关键字 */
    li:nth-of-type(even) {
        background-color: orange;
    }
    li:nth-of-type(odd) {
        background-color: purple;
    }

    /* 表达式 */
    li:nth-of-type(-n+5) {
        background-color: orange;
    }
    li:nth-last-of-type(n-5) {
        background-color: purple;
    }
</style>
```
---
* 第五种 **:empty** 空值选择器 空值指的是什么内容都没有连空格都没有的
---
```
<style>
    li:empty {
        background: green;
    }
</style>
```
---
---

### css3 的边框阴影 box-shadow 和文字阴影 text-shadow
> 1. 文字阴影 **text-shadow** 值有 4 个 offsetX(X轴) offsetY(Y轴) blur(模糊度 可选) color(颜色)
> 2. 边框阴影 **box-shadow** 值有 6 个 h(水平方向偏移量) v(垂直方向偏移量) blur(模糊度 可选) spread(扩展阴影 扩展和收缩阴影的大小 可选) color(颜色) inset(内阴影 默认为外阴影)
> 3. 同时给4个边框加阴影只需要将你写的阴影复制一遍添加到后面 水平和垂直取反就可以实现4个边框都有阴影 (两组阴影之间用 ，隔开)
---
```
<style>
    p {
        text-shadow: 1px 0px 4px skyblue;
    }
    
    .item {
        float: left;
        margin-right: 50px;
        height: 400px;
        width: 300px;
        border: 1px solid
    }
    
    .item img {
        width: 100%;
    }
    
    .item:nth-of-type(-n+3) {
        box-shadow: 3px 3px 3px #cccccc;
    }
    
    .item:last-of-type {
        box-shadow: 3px 3px 3px #cccccc inset, -3px -3px 3px #cccccc inset;
    }
</style>

<body>
    <!-- 文本阴影  text-shadow: offsetX offsetY blur(模糊值) color-->
    <p>这是一段有文本阴影的文字</p>
    <!-- 边框阴影 box-shadow: h(水平方向的偏移值) v(垂直方向的偏移值) blur(模糊值 可选) spread(扩展阴影 扩展和收缩阴影的大小 可选) color inset(内阴影 默认是外阴影)  -->
    <div class="items">
        <div class="item">
            <img src="../static/1.png" alt="">
        </div>
        <div class="item">
            <img src="../static/2.png" alt="">
        </div>
        <div class="item">
            <img src="../static/3.jpg" alt="">
        </div>
        <div class="item"></div>
    </div>
</body>
```
---
### css3的 锚点伪类 :target
> 1.  E:target 可以为锚点的目标元素添加样式 当目标元素被触发为当前的锚链接的目标元素时调用此伪类样式 
---
```
<style>
    .right div:target {
        background-color: hotpink;
    }
</style>
<body>
    <div class="main">
        <div class="left">
            <a href="#box1">盒子1</a>
            <a href="#box2">盒子2</a>
            <a href="#box3">盒子3</a>
            <a href="#box4">盒子4</a>
            <a href="#box5">盒子5</a>
        </div>
        <div class="right">
            <div id="box1">盒子1</div>
            <div id="box2">盒子2</div>
            <div id="box3">盒子3</div>
            <div id="box4">盒子4</div>
            <div id="box5">盒子5</div>
        </div>
    </div>

```
---
### css3 的 伪元素 ::before 和 ::after (在IE8上等低版本浏览器上叫伪类 **伪类 : 伪元素 ::** 高版本浏览器直接可以写:来兼容低版本 因为高本版浏览器即使你写: 也会自动转成::) 
> 1. 注意使用 ::before 和 ::after 的时候 必须写 content属性 即使你不需要添加内容也要写 因为不写这个伪元素不显示
> 2. ::before 和 ::after 是行内样式 如果想加宽度或者高度 请转为块级元素 三种转换方式 float position 和 display
> 3. 优点 1.因为是虚假元素所以在DOM树中不存在减少DOM树的结构 2.便于搜索引擎抓取
* 下方案例 利用伪元素添加2个div中间的空白半圆
---
```
<style>
    body {
        display: flex;
        justify-content: flex-start;
        margin: 100px auto;
    }
    /* 伪元素选择器 虚假元素在 DOM 树中找不到*/
    /* E::before E::after IE不支持双 :  所以建议写成 单 ： 目前主流的浏览器都会把这样的 单 : 转成 双 :
        1.是一个行内样式 如果想要设置宽高则需要 转成块元素 display:block  float:*  postition: 
        2. 必须写content, 哪怕不设置内容 也需要要content="" 因为不写content 不可见
    */
    
    div:first-of-type {
        width: 300px;
        height: 150px;
        background-color: aqua;
    }
    
    div:last-of-type {
        width: 200px;
        height: 150px;
        background-color: darkcyan;
        position: relative
    }
    
    div:last-of-type:before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #ffffff;
        top: -5px;
        left: -5px;
        border-radius: 5px;
    }
    
    div:last-of-type:after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #ffffff;
        bottom: -5px;
        left: -5px;
        border-radius: 5px;
    }
</style>

<body>

    <div></div>
    <div></div>
</body>
```
---