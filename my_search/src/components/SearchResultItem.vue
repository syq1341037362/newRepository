<template>
    <div class="search-result-item">
        <a class="search-result-item-link">
            <div class="title">{{info.title}}</div>
            <div class="url">{{info.url}}</div>
            <div class="desc">{{info.date}}--{{info.desc}}</div>
        </a>
    </div>
</template>

<script>
export default {
    props:['info']
}
</script>

<style lang="scss" scoped>
@import './../themes/base.scss';
    .search-result-item{
        text-align: left;
        padding: $space-large;
        & .search-result-item-link{
            text-decoration: none;
            &:hover{
                cursor: pointer;
                text-decoration: none;
            }
        }
        
        & .title{
            color: $result-color-title;
            font-size: 1.2em;
        }
        & .url{
            color:$result-color-url;
            padding: $space-normal;
        }
        & .desc{
            color:$result-color-desc;
            padding-left: $space-normal;
        }
    }
</style>
