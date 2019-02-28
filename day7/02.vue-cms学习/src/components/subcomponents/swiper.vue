<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 在组件中使用v-for 循环 必须写:key -->
            <!-- 将来谁使用谁传递数据 -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img_src" :class="{full:isfull}">
            </mt-swipe-item>
        </mt-swipe>
 
   </div>
   <!-- 分析为什么 商品评论的 轮播图那么丑 -->
   <!-- 1.首页中的图片宽和高都是设置100% -->
   <!-- 2. 在商品详情页面中 轮播图的图片 如果也是用宽高100%的话 页面不好看 -->
   <!-- 3. 商品详情页期望 高度100% 宽度自适应 -->
   <!-- 4.经过分析 得到问题原因 首页中的轮播图和详情页的轮播图 分歧点是 宽度是100% 还是自适应 -->
   <!-- 5.既然这个两个轮播图其他方面都是没有冲突的 只是宽度有分歧 那么我们可以定义一个属性 让使用轮播图的调用者手动指定是否为100%的宽度 -->
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:['lunbotuList','isfull']
}
</script>
<style lang="scss" scoped>
.mint-swipe{
        height:200px;
        .mint-swipe-item{
            text-align: center;
        }
        img{
            // width: 100%;
            height: 100%;
        }

    }
.full{
    width: 100%;
}
</style>
