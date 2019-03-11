<template>
    <div>
        <h1>这是App组件</h1>

        <!-- 为什么这里叫做 mt-button 的 button 直接就能用？ -->
        <mt-button type="primary" size="normal" plain icon="more" @click="show">default</mt-button>
        <mt-button type="primary" size="large" icon="back">default</mt-button>

        <butto type="button" class="mui-btn mui-btn-royal">紫色</butto>
        <!-- <mybtn type="primary">123456</mybtn> -->

        <router-link tag="span" to="/account">goodslist</router-link>
        <router-link to="/goodslist">goodslist</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            toastInstanse:null
        }
    },methods:{
        show(){
           this.toastInstanse =  Toast({
                message:"这是提示消息",
                position:"middle",
                duration:-1,
                iconClass:'glyphicon glyphicon-heart',
                className:'mytoast' //这是自定义Toast样式 需要自己提供
            })
        },
        getList(){
              this.show()
            //模拟获取列表的一个Ajax方法
            setTimeout(()=>{
              this.toastInstanse.close();
            },3000)
        }
    },
    created(){
        this.getList()
    }
}
</script>
<style>

</style>
