<template>
    <div>
        <h1>这是account 组件</h1>
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
/*普通的style标签只支持 普通的样式 如果想要使用scss 或者 less 需要为style 元素设置 lang属性*/
//主要 咱们的 style 标签 是在.vue 组件中定义的 推荐都为 style 开启 scoped 
    body{
        div{
           font-style: italic
        }
    }
</style>
