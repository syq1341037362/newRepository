
## 一、vue.js简介

### 1.vue.js是什么

**vue.js** 也称为vue,读音/vju:/,类似view,错误读音v-u-e 版本:v1.0 v2.0 
+ 是一个用来构建用户界面的框架
+ 是一个轻量级的MVVM框架 M-Model V-View VM-ViewModel 和 angular 、 react类似 其实就是所谓的数据双向绑定
+ 数据驱动+组件化的前端开发 （核心思想）
+ 通过简单的API就可以来实现**响应式的数据绑定**和**组合的视图组件**
+ 更容易上手、小巧

参考[官网](https://cn.vuejs.org/)

### 2.vue和angular的区别

#### 2.1 angular
+ 上手较难
+ 指令 ng-xxx
+ 所有属性和方法都存储在$scope中
+ 由 google维护

#### 2.2 vue
 + 简单、易学、更轻量
 + 指令以 v-xxx开头
 + HTML代码+JSON数据,再创建一个vue实例
 + 由 **尤雨溪** 等人维护, 目前就职于阿里巴巴 2014.2开源了 vue.js库源代码
 ![](https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=d49c7e60ee1190ef15f69a8daf72f673/4afbfbedab64034f29596c8ba6c379310b551da2.jpg)
 
---

 共同点: 都不兼容低版本的IE
 对比: github上vue的stars的数量大约是angular的两倍


## 二、起步

### 1.下载核心库vue.js
 cnpm/npm install vue

 vue2.0和1.0相比 最大的变化就是引入了Virtual Dom (虚拟DOM),页面更新效率更高 速度更快

### 2.vue 实现 hello world

    js:
        var vm = new Vue({
            el:'#app',//指定关联的选择器
            data:{ //存储数据
                msg:'hello world',
                name:'tom'
            }
        })

    html:
    <div id='app'>
        {{msg}}
    </div>    
---
## 三、vue 常用的指令

### 什么是指令？（用来扩展html标签的功能）
#### 常用的指令 示例请看demo 中 常用的指令.html
+ v-model 双向数据绑定
+ v-for 循环
+ v-on 简写@ 绑定事件 举例 v-on:click @click
+ v-show v-if 显示或隐藏 区别 v-show 的false 隐藏其实就是**dispaly:none** 而v-if则是直接不显示删除这个元素 如果是true 重新添加这个元素
+ v-bind 绑定属性 简写: 举例 v-bind:src :src 
为什么有这个v-bind 是因为有时候你需要对类似图片的src进行动态绑定(前提是你的url路径在data上) 普通的{{url}}赋值肯定是不能实现 所以有了v-bind 这个时候就可以为src绑定一个属性 也就是:src='url' 
> 但是有2个特别的 分别是 class 和 style
> > 为什么特别是因为有时候你的class是一个样式 不是像图片url一样可以写在data中 这个时候就需要注意 如果你还是按照 **:class='xxx'** 而你的data中没有这个属性 它就会报错 **xxx is not defind** **:style**也是同理 **(因为vue中属性绑定不能直接绑定css样式)**
> > 那么如何去改变呢 ？？？ 
> > **第一种** 既然绑定的是一个属性 你可以把类名写在data中的某个属性上这样就可以直接调用这个data中的属性 达到你想要的效果 类似 下面  它其实就是aa 指向了一个类名myClass
```
<style>
 .myClass{
     color:red;
     font-size:20px;
 }
</style>
<script>
var vm = new Vue({
    el:'#app',
    data{
        aa:'myClass'
    }
})
</script>
<html>
    <body>
        <div id="app">
            <h3 :class = 'aa'>样式显示</h3>
        </div> 
    </body>
</html>
```
---
> > **第二种** 如果标签绑定多个样式 如果是data中定义了2个样式的class类名 则可以直接用数组进行输出 **[xxx,xxx]** 如下 
```
<style>
 .myClass{
     color:red;
     font-size:20px;
 }
 .myClass1{
    background-color:blue;
 }
</style>
<script>
var vm = new Vue({
    el:'#app',
    data{
        aa:'myClass',
        bb:'myClass1'
    }
})
</script>
<html>
    <body>
        <div id="app">
            <h3 :class = '[aa,bb]'>样式显示</h3>
        </div> 
    </body>
</html>
```
---
> > **第三种** 更简单更有效的 **使用较多的方法，最常用推荐使用** 利用json形式  注意是{xxx:boolean} 属性名对应的后面是boolean值 用来判断是否要显示这个样式
```
<style>
 .myClass{
     color:red;
     font-size:20px;
 }
 .myClass1{
    background-color:blue;
 }
</style>
<script>
var vm = new Vue({
    el:'#app',
    data{
        flag:false,
        num:3
    }
})
</script>
<html>
    <body>
        <div id="app">
            <!-- 这里就会显示myClass但是不显示myClass1 通常我们把后面的boolean 判断用一个属性或者一个表达式进行判断 -->
            <h3 :class = '{myClass:true,myClass1:flag}'>样式显示</h3> 

            <!-- 这里使用了表达式来进行判断  如果num>0则显示 上面的num为3 所以结果为true -->
            <h4 :class = '{myClass:true,myClass1:num>0}'>样式显示2</h4> 
        </div> 
    </body>
</html>
```
---
> > **第四种** 变量引用json形式 但是**注意这个属性引用data中的其他属性会报错 属性名找不到 所以建议还是直接写 true 或者 false 或者使用计算属性**
```
<style>
 .myClass{
     color:red;
     font-size:20px;
 }
 .myClass1{
    background-color:blue;
 }
</style>
<script>
var vm = new Vue({
    el:'#app',
    data{
        showClass:{myClass:true,myClass1:false}
    }
})
</script>
<html>
    <body>
        <div id="app">
            <!-- 这里直接引用就可以 -->
            <h3 :class = 'showClass'>样式显示</h3> 
        </div>
    </body> 
</html>
```
---

## 四、事件和属性

### 1.事件

#### 1.1 事件简写
 v-on:click=''
 简写方式 @click=''
 v-bind:src=''
 简写方式 :src=''
```
 //这两种点击事件其实都可以
 <button v-on:click="showMessage">点我</button>
 <button @click="showMessage">点我</button>
 //同理为图片的src属性绑定使用下面两种也都是可以
 <img v-bind:src = 'url'/>
 <img :src = 'url'/>

```
---
#### 1.2 获取事件对象（$event） 包含事件相关的信息 事件源target 事件类型type 偏移量offset
```
<html>
    <body>
        <div id="app">
            <!-- 之前都是传递event然后在方法中获取 -->
            <button onclick="show(event)">点我</button>

            <!-- vue中通过$event传递 -->
            <button @click="print($event)">点我</button>

        </div> 
    </body>
</html>

<script>
var vm = new Vue({
    el:'#app',
    data{},
    methods:{
        print(e){
            console.log(e.target.innerHTML);//DOM对象
        }
    }
});
//因为 onclick不是vue的方法所以不能写在vm中
function show(e) {
    console.log(e.target.innerHTML)
}
</script>
```
---
#### 1.3 事件冒泡  
 阻止事件冒泡 [官网对应位置](https://cn.vuejs.org/v2/api/#v-on)
 - a) 原生js方式 依赖于事件对象 具体看demo 中 冒泡事件和默认行为.html
 - b) vue方式 更简洁 不依赖于事件对象 直接在需要冒泡的地方加上事件修饰符 **.stop** 举例如下
 ```
   <div @click="write">
        <p @click="print">
            <button @click.stop="show()">点我</button>
        </p>
    </div>
 ```

#### 1.4 事件默认行为
 阻止默认行为
 - a) 原生js方式 依赖于事件对象 具体看demo 中 冒泡事件和默认行为.html
 - b) vue方式 更简洁 不依赖于事件对象 直接在需要冒泡的地方加上事件修饰符 **.prevent** 举例如下
 ```
    <a href="#" @click.prevent="study()">vue阻止默认行为</a>
 ```

#### 1.5 键盘事件(f1 和 26个字母不能直接使用 需要自己重新定义) 
 - 回车: @keydown.13 或者 @keydown.enter
 - 上: @keydown.38 或者 @keydown.up
 - 下: @keydown.40 或者 @keydown.down
 - 删除: @keydown.8 或者  @keydown.delete
 ---
 > 声明全局的自定义键盘事件,也称为自定义键码或自定义键位别名 具体请看 demo 中 键盘事件.html
 ```
    Vue.config.keyCodes = {
    v: 86,
    f1: 112
    }
```

#### 1.6 事件修饰符
 [官网对应位置](https://cn.vuejs.org/v2/api/#v-on)
   - .stop - 调用 event.stopPropagation()。
   - .prevent - 调用 event.preventDefault()。
   - .capture - 添加事件侦听器时使用 capture 模式。
   - .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
   - .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
   - .native - 监听组件根元素的原生事件。
   - .once - 只触发一次回调。
   - .left - (2.2.0) 只当点击鼠标左键时触发。
   - .right - (2.2.0) 只当点击鼠标右键时触发。
   - .middle - (2.2.0) 只当点击鼠标中键时触发。
   - .passive - (2.3.0) 以 { passive: true } 模式添加侦听器

---
## 五、模板

### 1.简介
  Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析。
  - 文本插值 {{xxx}}
  数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：
    ```
    <span>Message: {{ msg }}</span>
    ```
### 2.数据绑定的方式
    具体请看 demo 中的数据绑定的方式
 - a. 双向数据绑定 v-model 
 - b. 单向数据绑定两种
    1. 使用两对大括号  {{ }} 可能会出现闪烁问题 解决方法 v-cloak 结合 css样式
    2. v-text 或者 v-html  不会出现闪烁问题 text和html区别在于 html可以识别标签 而 text解析成纯文本

### 3.其他指令
具体请看 demo 中的数据绑定的方式
 - v-once 数据只绑定一次 不随改变而改变
 - v-pre 不编译 直接原样显示

---
 ## 六、过滤器

 ### 1.简介
[官网地址](https://cn.vuejs.org/v2/api/#Vue-filter)
- 用来过滤模型数据,在显示之前进行数据处理和筛选
- 语法: {{ data | filter1(参数) | filter2(参数) }}

### 2.关于内置过滤器
- Vue 1.0中内置许多过滤器 如currency、uppercase、lowercase、limtBy、orderBy、filterBy
- Vue 2.0中已经删除了所有内置过滤器 全部被废除
如何解决?
 1. 使用第三方库,如loadash、date-fns日期格式化、accounting.js 货币格式化
 2. 使用自定义过滤器

### 3.自定义过滤器
详细信息请看 demo 中 自定义过滤器.html
- 使用全局过滤器 Vue.filter(过滤器ID,过滤器函数)
```
html:
  <p>{{msg | msgFormat('疯狂+1')}}</p>

js:  
//定义一个vue 全局过滤器  名字叫做 msgFormat
    Vue.filter('msgFormat',(msg,arg)=>{

        //字符串的 replace 方法 第一个参数 除了可以写一个 字符串之外 还可以定义一个正则

        return  msg.replace(/单纯/g,arg)
        
    });
    var vm = new Vue({
        el:'#app',
        data:{

            msg:'曾经，我也是一个单纯的少年，单纯的我，傻傻的问谁是世界上最单纯的男人'

        },
        methods: {
            
        }
    })
```
- 自定义局部过滤器
 在vm实例身上或者组件中的实例身上 挂载一个 filters  filters 是一个对象
 ```
 html:
    <!-- 过滤器传值 -->
    <h1>保留小数点后3位的过滤器</h1>
    <h3>{{ 12.345666 | number(3) }}</h3>
    <hr>
js:
    var vm = new Vue({

        el: '#app',

        data: {
            currentTime: Date.now()
        },

        methods: {},
        filters: { //自定义局部过滤器
            number: (data, n) => {
                var list = (data + '').split('.');
                var last = list[1].substr(0, n);
                var newData = parseFloat(list[0] + '.' + last);
                return newData;
            }
        }

    })    
 ```