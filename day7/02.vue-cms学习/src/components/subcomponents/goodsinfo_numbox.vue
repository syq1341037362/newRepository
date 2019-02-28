<template>
    <!-- 我们不知道什么时候能拿到max 总归有一刻会拿到一个真正的max -->
    <!-- 我们可以使用 watch 属性监听 来监听父组件传递个max 值 不管我们的 watch 会触发几次 但是最后一次肯定是一个合法的max 数值 -->
     <div class="mui-numbox" data-numbox-min='1' data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" ref="numbox" value="1" @change="countChange" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>

    <!-- 分析子组件什么时候把数据传递给父组件 -->

</template>
<script>
import mui from '../../../src/lib/mui/js/mui.min.js'
export default {
    mounted(){
        //初始化数字选择框
        mui('.mui-numbox').numbox(),
        console.log(this.max);
    },
    methods:{
        countChange(){
            //每当文本框数据修改的时候 立即新数据 通过事件调用 传递给父组件
            this.$emit('getcount',parseInt(this.$refs.numbox.value))
        }
    },
    props:['max'],
    watch:{
        //属性监听
        'max':(n,o)=>{
            //使用 JS api 设置numbox 的最大值
             mui('.mui-numbox').numbox().setOption('max',n)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

