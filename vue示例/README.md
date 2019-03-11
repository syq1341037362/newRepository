## [主流开源协议之间有何异同？](https://blog.csdn.net/cacacai/article/details/79703719)

## 用（传统方式）命令把修改过后的代码上传到github
1. git add .
2. git commit -m "提交信息"
3. git push 仓库地址

## 制作首页App组件
1. 完成 Header 区域 使用的是 Mint-UI 中的 Header组件
2. 制作底部的 Tabbar 区域 使用的是 MUI 的 Tabber.html
  + 在制作 购物车 小图标的时候 操作会相对多一些;
  + 先把 扩展图标的 css 样式 拷贝到 项目中
  + 拷贝 扩展字体库 ttf 文件 到项目中
  + 为 购物车 小图标 添加如下样式 mui-icon mui-icon-extra mui-icon-extra-cart
3. 要在 中间区域 放置一个 router-view 来展示路由匹配到的组件

## 改造tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接 展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据, 如何获取呢  使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据 要先保存到data 身上
4. 使用 v-for 循环渲染到每个 item 项

## 改造九宫格区域的样式

## 改造 新闻资讯 路由链接

## 新闻资讯 页面制作
1. 绘制页面
2. 使用 vue-resource 获取数据
3. 渲染真实数据


## 实现 新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造为 router-link 同时 在跳转的时候应该提供唯一的Id标识符
2. 创建新闻详情的组件页面  NewsInfo.vue
3. 在 路由模块中 将 新闻详情的 路由地址 和组件页面对应起来

## 实现新闻详情 的页面布局和数据渲染

## 单独封装一个 comment.vue 评论子组件
1. 先创建一个单独的 comment.vue 组件模板
2. 在需要使用 comment 组件的页面中 先手动导入 comment 组件
  + `import comment from './comment.vue'`
3. 在父组件中 使用 `components` 属性 将刚才导入  comment 组件 注册为自己的 子组件
4. 将注册子组件时候的 ，注册名称  以标签的 形式 在页面中 引用即可


## 获取所有的评论数据显示到页面中

## 实现点击加载更多的功能 
1. 绑定点击事件  实现点击请求下一页数据
2. 点击加载更多 让当前页数 page 加1 然后调用 this.getComments() 方法重新获取
3. 为了防止新数据覆盖老数据的情况 我么你在 点击加载更多的时候  每当获取到新数据应该让 老数据 
   调用 数组的 concat 方法 拼接上新数组

## 发表评论 
1. 把文本框做双向数据绑定
2. 给发表按钮添加事件
3. 校验评论内容是否为空 如果为空则Toast提示用户  评论内容不能为空 
4. 通过vue-resource 发送一个请求 把评论内容提交给 服务器
5. 当评论OK后 重新刷新列表 已查看最新的评论
  + 如果调用getComment 方法重新刷新列表的话 可能只能得到最后一页的评论 前几页评论获取不到
  + 换一种思路 评论成功 在客户端 手动拼接一个评论对象 然后调用数组的  unshift 方法 把最新的评论追加到 data 中 commentList 的开头 这样就能完美的实现

## 改造图片分享 按钮为路由的链接并显示对应的页面组件

## 绘制图片列表 组件页面结构
1. 制作顶部的滑动条
2. 制作底部的图片列表

### 制作顶部滑动条的坑
1. 需要借助 mui 中的 tab-top-webview--main.html
2. 需要把 slider 区域的 mui-fullscreen 类去掉
3. 滑动条无法正常触发滑动 通过检查官方文档发现是一个JS组件 需要被初始化一下
 + 1. 导入 mui.js
 + 2. 调用官方提供的方式 去初始化
 ```
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
 ```
 4. 我们在初始化 滑动条 的时候 导入的mui.js 但是控制台报错:
 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
  at Function.d.extend (mui.min.js:946)
  + 经过我们合理的推测 觉得 可能是 mui.js中用到了 'caller', 'callee', and 'arguments' 这些东西 ，但是 webpack 打包好的hundle.js 默认是启用严格模式的所以两者冲突了
  + 解决方案: 
   1. 把mui.js 中的 非严格 模式的代码改掉 但是很不现实
   2. 将webpack 打包时候的严格模式禁用掉
  + 最终我们选择了 plan B  移除严格模式 使用这个插件 
   cnpm install babel-plugin-transform-remove-strict-mode -D

5. 刚进入 图片分享页面的时候 滑动条无法正常工作 经过我们认真的分析 发现 如果要初始化 滑动条 必须要等到DOM 元素加载完毕  所以我们把初始化 滑动条 的代码 搬到了 mounted 生命周期函数中

6.当 滑动条 调试OK后 发现 tabber 无法正常工作了 这时候 我们需要把 tabber 按钮样式 中的`.mui-tab-item` 重新改下名字

7. 获取所有分类,并渲染分类列表
1. 图片列表需要使用懒加载技术  我们可以使用 Mint-UI 提供的 现成的组件 `lazy-load`
2. 根据`lazy-load` 的使用文档 尝试使用
3. 渲染图片数据


### 实现了图片列表的 懒加载改造 和样式美化

## 实现了 点击图片 跳转到 图片详情页
1. 在改造li 成为 router-link  的时候 需要使用 tag 将 router-link 默认渲染标签改为 li

## 实现详情页面的布局和美化 同时获取数据渲染页面


## 实现图片详情中 缩略图功能
1. 使用插件 vue2-preview 这个缩略图插件
2. 获取到所有的图片列表 然后使用v-for 渲染数据
3. 注意 每个图片数据对象中 必须有 w 和 h 属性


## 绘制 商品列表 页面基本结构美化


## 尝试在手机上 去进项项目的预览和测试
1. 要保证自己的手机可以正常运行
2. 要保证 手机 和 开发的电脑 处于同一Wifi环境中 也就说手机可以访问到电脑 IP 
3. 打开自己的项目中 package.json 文件 在dev脚本中添加一个--host 指令 把 当前电脑地址的WIFI IP 设置为 --host 的指令
+ 如何查看自己电脑所处的 wifi 的 ip 呢 cmd ipconfig
