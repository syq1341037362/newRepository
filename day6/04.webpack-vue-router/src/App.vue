<template>
    <div>
        <h1>这是App组件</h1>
        <router-link tag="span" to="/account">goodslist</router-link>
        <router-link to="/goodslist">goodslist</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>
