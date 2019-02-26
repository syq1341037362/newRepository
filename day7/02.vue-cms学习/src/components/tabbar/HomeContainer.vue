<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中使用v-for 循环 必须写:key -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img_src">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return{
            lunbotuList:[] //保存轮播图数组
        }
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.$axios.get('/getlunbo', {}).then(res=>{
                    if(res.data.status==0){
                      this.lunbotuList = res.data.message
                     
                    }else{
                        Toast('加载轮播图失败')
                    }
                }).catch(function (error) {
                console.log(error);
                });

        }
    }
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height:200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: red
            }
             &:nth-child(2){
                background-color: green
            }
             &:nth-child(3){
                background-color: blue
            }
        }
        img{
            width: 100%;
            height: 100%;
        }

    }

</style>
