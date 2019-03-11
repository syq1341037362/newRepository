<template>
    <div>
        <!-- 轮播图区域 -->
        <swpier :lunbotuList="lunbotuList" :isfull="true"></swpier>
        <!-- 九宫格到六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="#">
                    <img src="../../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="#">
                    <img src="../../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
		           
		</ul> 

    </div>
</template>
<script>
import {Toast} from 'mint-ui';
import swpier from '../subcomponents/swiper.vue'
export default {
    data(){
        return{
            lunbotuList:[], //保存轮播图数组
             flag:true
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
    },components:{
        swpier
    }
}
</script>
<style lang="scss" scoped>
    
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        img{
            width: 60px;
            height: 60px;
        }
        .mui-media-body{
            font-size: 13px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }
</style>
