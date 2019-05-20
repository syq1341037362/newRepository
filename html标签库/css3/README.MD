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
### css3 的 伪元素 
#### css3 的 伪元素 ::before 和 ::after (在IE8上等低版本浏览器上叫伪类 **伪类 : 伪元素 ::** 高版本浏览器直接可以写:来兼容低版本 因为高本版浏览器即使你写: 也会自动转成::) 
> 1. 注意使用 ::before 和 ::after 的时候 必须写 content属性 即使你不需要添加内容也要写 因为不写这个伪元素不显示
> 2. ::before 和 ::after 是行内样式 如果想加宽度或者高度 请转为块级元素 三种转换方式 float position 和 display
> 3. 优点 1.因为是虚假元素所以在DOM树中不存在减少DOM树的结构 2.便于搜索引擎抓取
> 4. 问题： 因为DOM树中不存在 所以无法用 js 进行操作
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
#### css3 的伪元素 ::first-letter  ::first-line 和 ::selection (注意 ::selection不能写:因为不识别 其余都可以写成:)
> 1. first-letter 获取第一个字母 first-line 获取第一行 selection选中样式
> 2. first-letter设置文字下沉之后 first-line对first-letter设置的第一个字母不起作用
> 3. selection只能设置样式 不能设置内容的大小
---
```
<style>
    p {
        font-size: 20px;
        line-height: 40px;
        padding: 10px;
    }
    /* 伪元素 ::first-letter 和 ::first-line的使用
        1.和 之前的before after等伪元素一样 可以使用:来兼容低版本 高版本自动转化为::
        2. first-letter设置文字下沉之后 first-line对first-letter设置的元素不起作用
        3. first-letter 获取第一个字母 first-line 获取第一行 selection选中样式
        
     */
    
    p:first-of-type::first-letter {
        color: #ff3636;
        font-weight: bold;
        font-size: 40px;
        float: left;
    }
    /* 如果你设置了 文字下沉 也就是上面那个添加了floa:left 则first-line对first-letter 操作的第一个字母不起作用，不设置文字下沉则起作用*/
    
    p:first-of-type::first-line {
        text-decoration: underline;
    }
    /* 如果你设置了 文字下沉 也就是上面那个添加了floa:left 则selection对first-letter 操作的第一个字母不起作用即无法选中，不设置文字下沉则起作用*/
    
    p::selection {
        background-color: hotpink;
        color: skyblue;
        /* 下面的这个不起作用 原因 它只能设置显示的样式，不能设置内容的大小*/
        font-size: 30px;
    }
</style>

<body>

    <p>
        我爱你三千次 - 摩根·斯塔克 <br/> Start With Iron Man And End With Iron Man <br/> I'm Iron Man - The Avengers Endgame <br/> I Love You Three Thousand Times - From Tony Stark To Morgan Stark
    </p>
</body>
```
---

### css3的颜色 RGBA 和 HSLA (它们其实就是RGB和HSL只不过添加了一个属性 A[alpha] 透明度)
> 1. 颜色是 6位的 16进制数据 16进制每2个代表一个颜色 颜色遵循 红橙黄绿青蓝紫
> 2. RGBA中 
![RGBA颜色对照片](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557685873131&di=4ab460391325fc7aab2341b7f7d54432&imgtype=0&src=http%3A%2F%2Fs11.sinaimg.cn%2Fmw690%2F0034MXvmgy6OLzE2EDofa%26690)
* R:红色(0-255) 
* G:绿色(0-255) 
* B:蓝色(0-255)  
* A:alpha(透明度 0-1) RGBA是在RGB基础上添加了透明度
> 3. 在RGB中如果你想让一个颜色起主导作用 那么这个颜色必须有值且大于当前最大值的一半 也是就是 128 
> 4.  HSLA H: Hue色调,色相 (取值是0-360 过度为红橙黄绿青蓝紫) S: Saturation饱和度 (取值 0.0%-100%) L: Lightness亮度 (取值 0.0%-100% 50%是平衡值) A:alpha(透明度 0-1) HSLA是在HSL基础上添加了透明度
> 5. 在HSLA中   
![HSLA颜色对照图](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557685640248&di=672650961b9b68cab608ed3a5d4a889a&imgtype=0&src=http%3A%2F%2Fstatic.qdskill.com%2F2018%2F10%2F1538714189-color-wheel.png)
* H:红色0或者360 橙30 黄60 绿120 青180 蓝240 紫300 (其实就是一个圆取0-360之间的值)
* S:值越小越偏向白色
* L:值越小越偏向黑色 默认50% 一般建议保留50%的值 0%是黑色 100%是白色;
* A:alpha(透明度 0-1) HSLA是在HSL基础上添加了透明度
---
```
<style>
        /* 颜色是 6位的 16进制数据 每2位代表一个颜色 颜色遵循 红橙黄绿青蓝紫
        1. RGBA R:红色(0-255) G:绿色(0-255) B:蓝色(0-255)  A:alpha(透明度 0-1) RGBA是在RGB基础上添加了透明度
            如果你想让一个颜色起主导作用 那么这个颜色必须有值且大于当前最大值的一半 也是就是 128 
        2. HSLA H: Hue色调,色相 (取值是0-360 过度为红橙黄绿青蓝紫) S: Saturation饱和度 (取值 0.0%-100%) L: Lightness亮度 (取值 0.0%-100% 50%是平衡值) A:alpha(透明度 0-1) HSLA是在HSL基础上添加了透明度
            H: 0-360就是红色 120就是纯绿 240就是纯蓝 遵循红橙黄绿青蓝紫(其实就是一个圆) 红色0或者360 橙30 黄60 绿120 青180 蓝240 紫300
            S:值越小越偏向白色
            L:值越小越偏向黑色 默认50% 一般建议保留50%的值 0%是黑色 100%是白色;
        */
        
        .ironman {
            background-color: #ff3636;
            color: #fff;
            width: 500px;
            height: 100px;
            line-height: 100px;
            font-size: 30px;
            box-shadow: 1px 0px 2px red;
            padding: 10px;
            text-align: center;
            margin-bottom: 50px;
        }
        
        .captain {
            background-color: rgba(255, 54, 54, 0.6);
            color: #fff;
            width: 500px;
            height: 100px;
            line-height: 100px;
            font-size: 30px;
            box-shadow: 1px 0px 2px red;
            padding: 10px;
            text-align: center;
            margin-bottom: 50px;
        }
        
        .thor {
            background-color: hsla(0, 100%, 50%, 1);
            color: #fff;
            width: 500px;
            height: 100px;
            line-height: 100px;
            font-size: 30px;
            box-shadow: 1px 0px 2px red;
            padding: 10px;
            text-align: center;
            margin-bottom: 50px;
        }
    </style>
</head>

<body>
    <div class="ironman">钢铁侠 - Iron Man </div>
    <div class="captain">美国队长 - Captain America </div>
    <div class="thor">雷神 - Thor Odinson</div>
</body>
```
---

### css3 盒模型 border-box content-box
> 1. 通常情况下 你设置的 width 就是内容宽度 不包括 padding 和 border 导致页面可能因为多加了 padding 和 border 而错位 混乱
> 2. box-sizing 有2个值 border-box content-box
> 3. content-box 设置的width属性仅仅是内容的宽度 盒子的最终的宽高值在width的基础上加上 padding 和 border
> 4. border-box 你设置的width属性就是盒子的最终宽度 包含 padding 和 border 如果添加 padding 和 border 那么真正放置内容的区域会减小 但是它可以稳固页面的结构
> 5. 后期主要是使用 border-box 他会根据你的padding和border来减少内容区域 防止加border盒子被挤出现移动问题
---
```
<style>
        .box {
            width: 400px;
            height: 200px;
            background-color: #999999;
            margin: 200px auto;
        }
        
        .left,
        .right {
            width: 200px;
            height: 200px;
            float: left;
        }
        
        .left {
            background-color: #ff3636;
            padding-left: 10px;
            border-right: 10px solid green;
            /* 设置盒模型  
                1.border-box 你设置的width属性就是盒子的最终宽度 包含 padding 和 border 如果添加 padding 和 border 那么真正放置内容的区域会减小 但是它可以稳固页面的结构
                2.content-box 你设置的width属性仅仅是内容的宽度 盒子的最终的宽高值在width的基础上加上 padding 和 border
                
            */
            box-sizing: border-box;
        }
        
        .right {
            background-color: skyblue;
        }
        
        .items {
            width: 1200px;
            height: 170px;
            margin: 100px auto;
        }
        
        .item {
            width: 316px;
            height: 170px;
            display: inline-block;
            margin: 0 10px;
            overflow: hidden;
            /* 添加盒模型 */
            box-sizing: border-box;
        }
        
        .item:hover {
            border: 10px solid red;
        }
        
        .bg1 {
            background: url("../static/1.png") no-repeat center center;
        }
        
        .bg2 {
            background: url("../static/2.png") no-repeat center center;
        }
        
        .bg3 {
            background: url("../static/3.jpg") no-repeat center center;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="left">刘诗诗自从和吴奇隆结婚后，就几乎很少露面，偶尔高兴了出来接个戏。每次被偷拍都是和吴奇隆大包小包的，不知道刚去哪度完假。而且每次被偷拍的照片，但每次吴奇隆看刘诗诗那宠溺的小眼神从未停止过疼爱。</div>
        <div class="right"></div>
    </div>
    <div class="items">
        <div class="item bg1"></div>
        <div class="item bg2"></div>
        <div class="item bg3"></div>
    </div>
</body>
```
---

### css3的线性渐变 linear-gradient() IE9之前不支持
> 1. 默认值是3个 分别是 point/angle(方向或者角度),strat(开始颜色),end(结束颜色) 第一个不写默认上到下
> 2. point 位置 四个值 to left 、 to right 、 to top 、 to bottom
> 3. angle 角度 向上(0deg)  向右(90deg)  向下**默认值**(180deg)  向左(270deg) **可以写任意的角度值**
> 4. 渐变不是单一色 他产生的是图像 所以需要使用background而不是color
> 5. linear-gradient(方向,颜色1 位置,颜色2 位置,颜色3 位置,....)  指定方向 颜色 位置 的写法 具体看下面
---
```
<style>
    /* 线性渐变语法:
        linear-gradient(point 位置|| angle 角度 ,strat,end)
        第一个参数:可选 point 或者 angle
        point 位置 四个值 to left 、 to right 、 to top 、 to bottom
        angle 角度 四个值只不过是角度问题  向上(0deg) 向右(90deg) 向下(180deg)是默认值 向左(270deg) 可以写任意的角度值
        第二个参数： 起点颜色可以指定颜色的位置
        第三个参数： 终点颜色 可以指定颜色位置
        */
    
    div {
        width: 300px;
        height: 100px;
        margin: 100px auto;
        /* 添加渐变色  渐变不是单一色 他产生的是图像 所以需要使用background*/
        /* linear-gradient(方向,开始颜色 位置,颜色2 位置,颜色3 位置,....) */
        /* 方向 
            to top : 0deg 
            to right : 90deg
            to bottom : 180deg
            to left : 270deg
        */
        /* background: linear-gradient(to right, red, blue); */  //这里的是默认的写法
        /* background: linear-gradient(to right, skyblue, pink, hotpink, blue); */ //这是是只指定颜色 
        background: linear-gradient(to right, skyblue 0%, pink 15%, hotpink 50%, blue 100%); //这里不光指定了颜色 还指定了颜色的位置从哪里到哪里
    }
</style>

<body>
    <div></div>
</body>
```
---
### css3的径向渐变 radial-gradient()
> 1. 语法 background: radial-gradient(center, shape, size, start-color, ..., last-color);
> 2. center：渐变起点的位置，可以为百分比，默认是图形的正中心。可以是位置 也可以是表达式 表达式( top left right bottom)
> 3. shape：渐变的形状，ellipse表示椭圆形，circle表示圆形。默认为ellipse，如果元素形状为正方形的元素，则ellipse和circle显示一样。
> 4. size：渐变的大小，即渐变到哪里停止，它有四个值。 closest-side：最近边； farthest-side：最远边； closest-corner：最近角； farthest-corner：最远角
---
```
<style>
    /* 径向渐变的语法
        background: radial-gradient(center, shape, size, start-color, ..., last-color);
       
        center：渐变起点的位置，可以为百分比，默认是图形的正中心。可以是位置 也可以是表达式 表达式( top left right bottom)
        shape：渐变的形状，ellipse表示椭圆形，circle表示圆形。默认为ellipse，如果元素形状为正方形的元素，则ellipse和circle显示一样。
        size：渐变的大小，即渐变到哪里停止，它有四个值。 closest-side：最近边； farthest-side：最远边； closest-corner：最近角； farthest-corner：最远角


     */
    
    .divbox {
        width: 1400px;
        height: 700px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    
    .box1 {
        width: 200px;
        height: 200px;
        margin-right: 100px;
        /* 简写 不写第一个默认中心 不写第二个 默认从最远角*/
        background: -webkit-radial-gradient(red, green, blue);
        /* 完整的 */
        /* background:  -webkit-radial-gradient(50% 50%, farthest-corner, red, green, blue); */
        text-align: center;
        color: #ffffff;
    }
    
    .box2 {
        width: 200px;
        height: 200px;
        margin-right: 100px;
        background: -webkit-radial-gradient(red 5%, green 15%, blue 60%);
        text-align: center;
        color: #ffffff;
        box-sizing: border-box;
    }
    
    .box3 {
        width: 200px;
        height: 200px;
        margin-right: 100px;
        background: -webkit-radial-gradient(circle, red, yellow, green);
        text-align: center;
        color: #ffffff;
        box-sizing: border-box;
    }
    
    .box4 {
        width: 300px;
        height: 200px;
        margin-right: 100px;
        background: -webkit-radial-gradient(ellipse, red, yellow, green);
        text-align: center;
        color: #ffffff;
        box-sizing: border-box;
    }
    
    .box5 {
        width: 200px;
        height: 200px;
        margin-right: 100px;
        background: -webkit-radial-gradient(60% 40%, closest-side, blue, green, yellow, black);
        text-align: center;
        color: #ffffff;
        box-sizing: border-box;
    }
    
    .box6 {
        width: 200px;
        height: 200px;
        margin-right: 100px;
        background: -webkit-radial-gradient(60% 40%, farthest-side, blue, green, yellow, black);
        text-align: center;
        color: #ffffff;
        box-sizing: border-box;
    }
    
    .box7 {
        width: 200px;
        height: 200px;
        margin-right: 100px;
        background: -webkit-radial-gradient(60% 40%, closest-corner, blue, green, yellow, black);
        text-align: center;
        color: #ffffff;
        box-sizing: border-box;
    }
    
    .box8 {
        width: 200px;
        height: 200px;
        margin-right: 100px;
        background: -webkit-radial-gradient(60% 40%, farthest-corner, blue, green, yellow, black);
        text-align: center;
        color: #ffffff;
        box-sizing: border-box;
    }
    
    .box9 {
        width: 300px;
        height: 200px;
        margin-right: 100px;
        background: -webkit-repeating-radial-gradient(red, yellow 10%, green 20%);
        text-align: center;
        color: #ffffff;
        box-sizing: border-box;
    }
</style>

<body>
    <div class="divbox">
        <div class="box1">以中心（50% 50%）为起点，到最远角（farthest-corner），从red到green、blue的均匀渐变，效果图：</div>
        <div class="box2">多颜色节点不均匀分布</div>
        <div class="box3">设置渐变形状 cricle </div>
        <div class="box4">设置渐变形状 ellipse</div>
        <div class="box5">closest-side 最近边</div>
        <div class="box6">farthest-side 最远边</div>
        <div class="box7">closest-corner 最近角</div>
        <div class="box8">farthest-corner 最远角</div>
        <div class="box9">重复性渐变</div>
    </div>

</body>
```
---
### css3的边框图片 border-image: url slice/width/outset repeat
* 1. url -> border-image-source
> border-image-source：可以指定边框的图片路径 默认只是填充到容器的四个角点
--- 
* 2. slice -> border-image-slice
> border-image-slice设置四个方向上的裁切距离 fill是做内容的内部填充
---
* 3. width - > border-image-width
> 边框图片的宽度 如果没有设置这个属性 那么宽度默认就是元素的原始的边框的宽度
---
* 4. outset -> border-image-outset
> 边框图片的扩展 一般不会使用
---
* 5. repeat -> border-image-repeat
> 背景图片的平铺属性 repeat直接重复平铺 round将内容缩放进行完整平铺  stretch拉伸
---
```
 <style>
    * {
        padding: 0px;
        margin: 0px;
    }
    
    .box1 {
        width: 300px;
        height: 300px;
        margin: 100px auto;
        border: 27px solid red;
        color: white;
        /* 添加边框图片 */
        /* border-image-source：可以指定边框的图片路径 默认只是填充到容器的四个角点 */
        /* border-image-source: url("../static/2.png"); */
        /* 让他成为9宫格 border-image-slice设置四个方向上的裁切距离 fill是做内容的内部填充 */
        /* border-image-slice: 27 fill; */
        /* border-image-width : 边框图片的宽度 如果没有设置这个属性 那么宽度默认就是元素的原始的边框的宽度 */
        /* 
            细节1：边框图片的本质是背景图片 并不会影响元素内容的放置 
            细节2：内容只会被容器的padding和border影响
            */
        /* border-image-width: 27px; */
        /* border-image-outset：边框图片的扩展 一般不会使用 */
        /* border-image-outset: 27px; */
        /* border-image-repeat：背景图片的平铺属性 repeat直接重复平铺 round将内容缩放进行完整平铺*/
        /* border-image-repeat:round; */
        /* 缩写
            1. url -> border-image-source
            2. slice -> border-image-slice
            3. width - > border-image-width
            4. outset -> border-image-outset
            5. repeat -> border-image-repeat

            border-image: url slice/width/outset repeat
            */
        border-image: url("../static/2.png") 27 fill / 27px / 0px round;
    }
</style>

<body>
    <div class="box1">111</div>
</body>
```
---
### css3的过度 transition 
> 1. transition-property : 添加过渡效果的样式属性名称 只能给变化值的属性添加 例如 宽度高度等 从某个值变为某个值这样的 而且不能是auto
* all是所有样式 缺点 1.效率低下 它会去查询所有添加的样式  2.所有样式的过度效果是一样的
* 推荐使用 **,** 分隔 设置多个样式  left 0.5s ease 2s,background-color 2s linear 2s,...
> 2. transition-duration : 过渡效果的耗时 以秒为单位
> 3. transition-timing-function : 设置时间函数---控制运动的速度 
* linear 匀速 
* ease 从慢到快再到慢
* ease-in 规定以慢速开始的过渡效果
* ease-out 规定以慢速结束的过渡效果
* ease-in-out 规定以慢速开始和结束的过渡效果
* cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。
> 4. transition-delay ：过渡效果的延迟 以秒为单位
---
```
<style>
    * {
        padding: 0px;
        margin: 0px;
    }
    
    div {
        width: 200px;
        height: 200px;
        background-color: red;
        position: absolute;
        left: 100px;
        top: 100px;
        /* transition 添加过渡效果 过渡效果执行完毕 默认会还原到原始状态
            1. transition-property : 添加过渡效果的样式属性名称 
                all是所有样式 缺点 1.效率低下 它会去查询所有添加的样式  2.所有样式的过度效果是一样的
                也可以用 , 设置多个样式  left 0.5s ease 2s,background-color 2s linear 2s
            2. transition-duration : 过渡效果的耗时 以秒为单位
            3. transition-timing-function : 设置时间函数---控制运动的速度 
                linear 匀速 
                ease 从慢到快再到慢
                ease-in 规定以慢速开始的过渡效果
                ease-out 规定以慢速结束的过渡效果
                ease-in-out 规定以慢速开始和结束的过渡效果
                cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。
            4. transition-delay ：过渡效果的延迟 以秒为单位
            */
        transition: left 0.5s ease 2s, background-color 2s linear 2s;
    }
    
    div:active {
        left: 1000px;
        background-color: blue;
    }
</style>
<body>
    <div></div>
</body>
```
--- 
### css3的transiform2d转换 transiform 可以进行 translate移动、 scale缩放、 rotate旋转、skew斜切等操作
>> * 设置多个transiform 只需要 空格 再添加下一个transiform就可以 注意 旋转和其他一起使用的时候 要注意旋转会改变坐标轴位置 如果是移动和旋转 要把移动写在前面 否则坐标轴改变 移动的方向也随之改变
---
> 1. transiform 的 移动属性 translate() 
* 有2个参数 X Y 如果写一个默认是X轴移动距离 
* 移动是参照元素的左上角 
* 执行完毕后会恢复到默认值
---
> 2. transiform 的 缩放属性 scale() 
* 2个值X Y 如果写一个就代表X Y同时缩放
* 缩放是参照元素的中心点  大于1就是放大 小于1就是缩小 1就是不缩放
---
> 3. transiform 的 旋转属性 rotate()
* 1个值 角度 正数就是顺时针 负数就是逆时针
---
> 4. transiform 的 斜切属性 （改变元素形状） skew()
* 2个值 X Y的角度 如果写一个代表X方向斜切的角度
---
```
 <style>
    /* transiform 可以进行 移动 缩放 旋转 斜切等操作 */
    
    * {
        padding: 0px;
        margin: 0px;
    }
    
    body {
        display: flex;
        justify-content: flex-start;
        margin: 100px auto;
    }
    
    div {
        width: 100px;
        height: 100px;
        margin-right: 50px;
    }
    
    .box1 {
        background-color: skyblue;
        transition: transform 0.5s ease;
        text-align: center;
        color: white;
    }
    
    .box1:active {
        /* transiform 的 移动属性 translate() 有2个参数 X Y 如果写一个默认是X轴移动距离*/
        /* 1.移动是参照元素的左上角 2.执行完毕后会恢复到默认值*/
        transform: translate(40px)
    }
    
    .box2 {
        background-color: hotpink;
        transition: transform 0.5s ease;
        text-align: center;
        color: white;
    }
    
    .box2:active {
        /* transiform 的 缩放属性 scale() 2个值X Y 如果写一个就代表X Y同时缩放 */
        /* 1.缩放是参照元素的中心点  大于1就是放大 小于1就是缩小 1就是不缩放*/
        transform: scale(1.5);
    }
    
    .box3 {
        background-color: limegreen;
        transition: transform 0.5s ease;
        text-align: center;
        color: white;
    }
    
    .box3:active {
        /* transiform 的 旋转属性 rotate() 1个值 角度 正数就是顺时针 负数就是逆时针  */
        /* 设置多个transiform 只需要 空格 再添加下一个transiform就可以 注意 旋转和其他一起使用的时候 要注意旋转会改变坐标轴位置 如果是移动和旋转 要把移动写在前面 否则坐标轴改变 移动的方向也随之改变 */
        transform: translate(180px, 500px) rotate(180deg);
    }
    
    .box4 {
        background-color: aqua;
        transition: transform 0.5s ease;
        text-align: center;
        color: white;
    }
    
    .box4:active {
        /* transiform 的 斜切属性 （改变元素形状） skew() 2个值 X Y的角度 如果写一个代表X方向斜切的角度  */
        transform: skew(45deg, -180deg)
    }
</style>


<body>
    <div class="box1">translate的效果</div>
    <div class="box2">scale效果</div>
    <div class="box3">rotate效果</div>
    <div class="box4">skew效果</div>
    <div class="box5"></div>

</body>
```
---
### transiform的 transform-origin属性 设置旋转轴心点
> 有2个值 X Y 取值
> 关键字 top bottom left right 
> 语法  transform-origin: right top;
* 下面的示例是一个扑克牌旋转的案例 ![扑克牌图片](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558382406870&di=c2c145468b90ebcadc585400dd8d3262&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F01%2F07%2F121bb2438d09ac46cd9215c1c7555943.jpg)
---
```
<style>
 .k {
        width: 300px;
        height: 300px;
        margin-top: 400px;
        align-self: flex-end;
        position: relative;
    }
    
    .k img {
        position: absolute;
        width: 300px;
        height: 300px;
        transition: transform 1.5s ease;
        transform-origin: right top;
    }
    
    .k:hover>img:nth-of-type(1) {
        transform: rotate(60deg);
    }
    
    .k:hover>img:nth-of-type(2) {
        transform: rotate(120deg)
    }
    
    .k:hover>img:nth-of-type(3) {
        transform: rotate(180deg)
    }
    
    .k:hover>img:nth-of-type(4) {
        transform: rotate(240deg)
    }
    
    .k:hover>img:nth-of-type(5) {
        transform: rotate(300deg)
    }
    
    .k:hover>img:nth-of-type(6) {
        transform: rotate(360deg)
    }
</style>


<body>
    <div class="k">
        <p>炫酷的旋转特效鼠标移上去试一下</p>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558382406870&di=c2c145468b90ebcadc585400dd8d3262&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F01%2F07%2F121bb2438d09ac46cd9215c1c7555943.jpg" alt="">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558382406870&di=c2c145468b90ebcadc585400dd8d3262&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F01%2F07%2F121bb2438d09ac46cd9215c1c7555943.jpg" alt="">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558382406870&di=c2c145468b90ebcadc585400dd8d3262&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F01%2F07%2F121bb2438d09ac46cd9215c1c7555943.jpg" alt="">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558382406870&di=c2c145468b90ebcadc585400dd8d3262&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F01%2F07%2F121bb2438d09ac46cd9215c1c7555943.jpg" alt="">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558382406870&di=c2c145468b90ebcadc585400dd8d3262&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F01%2F07%2F121bb2438d09ac46cd9215c1c7555943.jpg" alt="">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558382406870&di=c2c145468b90ebcadc585400dd8d3262&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F01%2F07%2F121bb2438d09ac46cd9215c1c7555943.jpg" alt="">
    </div>

</body>
```
---