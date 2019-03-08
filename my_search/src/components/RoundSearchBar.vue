<template>
    <div class="round-search-bar">
        <input type="text" class="input-search" v-model="search" @keydown.enter="doSearch">
        <button class="btn-search" @click="doSearch">
            <img class="icon-search" src="./../assets/icon_search.svg" alt="logo">
        </button>
    </div>
</template>

<script>
import Until from './../common/until.js';
export default {
    name:'roundsearchbar',
    props:{
        search:{
            type:String
        }
    },
    methods:{
        doSearch(){
            Until.searchApi(this.$router,this.search);
        }
    }
}
</script>

<style lang="scss" scoped>
@import './../themes/base.scss';
    .round-search-bar{
        display: inline-block;
        width: 500px;
        position: relative;
        & .input-search{
            outline: none;
            width: 100%;
            height: $round-search-bar-height;
            border-radius: $round-search-bar-border-radius;
            box-sizing: border-box;
            border: 1px solid $border-color-gray;
            padding: 20px;
            font-size: 1.2em;

        }
        & .btn-search{
            outline: none;
            height: $round-search-bar-height;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            .icon-search{
                width: 30px;
                height: 30px;
                margin-right: 15px;
            }
        }
    }
</style>
