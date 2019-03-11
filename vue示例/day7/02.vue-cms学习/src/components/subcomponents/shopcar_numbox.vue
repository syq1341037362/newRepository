<template>
     <div class="mui-numbox" data-numbox-min='1' data-numbox-max='max' style="height:25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="count" ref="numbox" readonly @change="countChange" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>

    <!-- 分析子组件什么时候把数据传递给父组件 -->

</template>
<script>
import mui from '../../../src/lib/mui/js/mui.min.js'
export default {
    mounted(){
        //初始化数字选择框
        mui('.mui-numbox').numbox()
        // console.log(this.count);
    },
    methods:{
        countChange(){
           //数量改变了
           //每当数量值改变了 则立即把最新的数量同步到 购物车中的 store 中 覆盖之前的数量
           //console.log(this.$refs.numbox.value);
           this.$store.commit('updateGoodsInfo',{id:this.goodsid,count:this.$refs.numbox.value})
        }
    },
    props:['count','goodsid']
}
</script>
<style lang="scss" scoped>

</style>

