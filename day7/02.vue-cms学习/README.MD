#这是一个NB的项目

##牛不牛逼，用心去感受每一行代码中的诗情雅艺、

###我们是有灵魂的程序员 所以我们的代码是富有诗意的

###编不下去了,哈哈哈

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
