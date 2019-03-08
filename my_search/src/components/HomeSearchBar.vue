<template>
    <div class="home-search-bar">
        <!-- input输入框 -->
        <input type="text" class="input-search" v-model="searchText" @keydown.enter="doSearch">
        <!-- 搜索按钮 -->
        <button class="btn-search" @click="doSearch">搜索一下</button>

    </div>
</template>

<script>
import Until from './../common/until.js'
export default {
    name:"home-search-bar",
    data(){
        return {
            searchText:""
        }
    },
    methods:{
        doSearch(){
           Until.searchApi(this.$router,this.searchText)
        }
    }
}
</script>

<style lang="scss">
    @import '../themes/base.scss'; 
    .home-search-bar{
        max-width: 650px;
        & .input-search{
            width: 70%;
            height: $home-search-bar-height;
            box-sizing: border-box;
            border:1px solid $border-color-gray;
            vertical-align: bottom;
            font-size: 1.2em;
            outline: none;
            border-top-left-radius: $home-search-bar-radius;
            border-bottom-left-radius: $home-search-bar-radius;
            padding: 20px;
        }
        & .btn-search{
            width: 30%;
            height: $home-search-bar-height;
            box-sizing: border-box;
            border:none;
            background-color: $color-primary;
            color: white;
            font-size: 1.6em;
            outline: none;
             border-top-right-radius: $home-search-bar-radius;
            border-bottom-right-radius: $home-search-bar-radius;
        }
    }
    
</style>
